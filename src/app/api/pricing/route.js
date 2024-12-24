import { NextResponse } from "next/server";
const { google } = require("googleapis");

function makeBody(to, from, subject, message) {
  const email = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    message,
  ].join("\n");

  return Buffer.from(email)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request) {
  try {
    const bodyJSON = await request.json();

    const {
      fullName,
      email,
      phone,
      companyName,
      website,
      service,
      budget,
      message,
    } = bodyJSON;

    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID,
      process.env.EMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error("Failed to generate access token.");
    }

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    // Email content for admin
    const adminEmailBody = makeBody(
      process.env.EMAIL_USER,
      process.env.EMAIL_USER,
      `New Request: ${service}`,
      `
      <p><b>Full Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Company Name:</b> ${companyName}</p>
      <p><b>Website:</b> ${website || "N/A"}</p>
      <p><b>Service:</b> ${service}</p>
      <p><b>Budget:</b> ${budget}</p>
      <p><b>Message:</b> ${message || "N/A"}</p>
      `
    );

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: adminEmailBody },
    });

    return NextResponse.json({ message: "Request sent successfully." });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { message: "Failed to send the request.", error: error.message },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
const { google } = require("googleapis");

function makeBody(to, from, subject, message) {
  const str = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    message,
  ].join("\n");

  return Buffer.from(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const {
      fullName,
      email,
      phone,
      companyName,
      website,
      service,
      otherService,
      budget,
      goals,
      age,
      gender,
      location,
      interests,
      timeline,
      contactMethod,
      file,
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

    const attachment = file
      ? {
          mimeType: file.mimeType,
          filename: file.filename,
          data: file.data, // Base64 encoded file data
        }
      : null;

    const adminEmailBody = makeBody(
      process.env.EMAIL_USER,
      process.env.EMAIL_USER,
      `New Request Form Submission`,
      `
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company Name:</b> ${companyName}</p>
        <p><b>Website:</b> ${website || "N/A"}</p>
        <p><b>Services:</b> ${service.join(", ")}</p>
        ${otherService ? `<p><b>Other Service:</b> ${otherService}</p>` : ""}
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Goals:</b> ${goals}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Interests:</b> ${interests}</p>
        <p><b>Timeline:</b> ${timeline}</p>
        <p><b>Contact Method:</b> ${contactMethod.join(", ")}</p>
        `,
        attachment
    );

    const clientEmailBody = makeBody(
      email, // Client email
      process.env.EMAIL_USER, // Sender (admin)
      "Brandedify: We've Received Your Request", // Subject
      `
      
      `
    );

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: adminEmailBody },
    });

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: clientEmailBody },
    });

    return NextResponse.json({ message: "Emails sent successfully." });
  } catch (error) {
    console.error("Error details:");
    console.error("Message:", error.message);
    console.error("Stack Trace:", error.stack);
    return NextResponse.json(
      { message: "Failed to send emails.", error: error.message },
      { status: 500 }
    );
  }
}

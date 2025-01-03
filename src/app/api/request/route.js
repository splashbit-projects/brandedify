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
      "We've Received Your Request", // Subject
      `
      <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif;">
        <thead>
          <tr>
              <td>
                  <img style="width: 100%" src="https://brandedify.com/images/email_header.png" alt="Header" />
              </td>
          </tr>
        </thead>
            <tbody>
                <tr>
                    <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                        <h2 style="text-align: left; font-size: 20px;">Dear ${fullName},</h2>
                        <p style="font-size: 16px; line-height: 19px;">Thank you for reaching out to Brandedify. We’re thrilled to connect and explore how we can support your business's growth and success.</p>
                        <p style="font-size: 16px; line-height: 19px;">Your request has been received, and our team is reviewing the details. A dedicated consultant will contact you shortly to better understand your needs and discuss how our digital marketing solutions can drive impactful results for your business.</p>
                         <ul style="padding-left: 20px;">
                          <li style="font-size: 16px; line-height: 19px;">
                              <b style="color:#7373FF;font-weight: 600;">Review:</b> We'll analyze the information you provided to create a personalized strategy
                              tailored to your goals.
                          </li>
                          <li style="font-size: 16px; line-height: 19px;">
                              <b style="color:#7373FF;font-weight: 600;">Contact:</b> A team member will get in touch within 24 hours to outline the next steps and
                              schedule a follow-up discussion.
                          </li>
                          <li style="font-size: 16px; line-height: 19px;">
                              <b style="color:#7373FF;font-weight: 600;">Consultation:</b> We'll dive deeper into your objectives and present actionable strategies to
                              achieve measurable outcomes.
                          </li>
                      </ul>
                        <p style="font-size: 16px; line-height: 19px;">For any immediate questions or additional details, you're welcome to contact us directly at info@brandedify.com.</p>
                        <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                            Best regards,
                            <br>
                           The Brandedify Team
                        </p>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                      <img style="width: 100%" src="https://brandedify.com/images/email_header.png" alt="Header" />
                  </td>
                </tr>
            </tfoot>
        </table>
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

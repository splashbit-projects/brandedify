import { NextResponse } from "next/server";
const sgMail = require("@sendgrid/mail");

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

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const attachments = file
      ? [
          {
            content: file.data,
            filename: file.filename,
            type: file.mimeType,
            disposition: "attachment",
          },
        ]
      : [];

    const adminEmail = {
      to: process.env.EMAIL_USER,
      from: process.env.EMAIL_USER,
      subject: "New Request Form Submission",
      html: `
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
      attachments,
    };

    const clientEmail = {
      to: email,
      from: process.env.EMAIL_USER,
      subject: "We've Received Your Request",
      html: `
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
                        <p style="font-size: 16px; line-height: 19px;">Thank you for reaching out to Brandedify. We're thrilled to connect and explore how we can support your business's growth and success.</p>
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
      `,
    };

    await sgMail.send(adminEmail);
    await sgMail.send(clientEmail);

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

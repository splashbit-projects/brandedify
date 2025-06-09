import { NextResponse } from "next/server";
const sgMail = require('@sendgrid/mail');

export async function POST(request) {
  try {
    const bodyJSON = await request.json();

    const {
      fullName,
      email,
      phone,
      position,
      resume,
      portfolio,
      comments,
    } = bodyJSON;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const attachments = [];
    if (resume) {
      attachments.push({
        content: resume.data,
        filename: resume.filename,
        type: resume.mimeType,
        disposition: 'attachment'
      });
    }
    if (portfolio) {
      attachments.push({
        content: portfolio.data,
        filename: portfolio.filename,
        type: portfolio.mimeType,
        disposition: 'attachment'
      });
    }

    const adminEmail = {
      to: process.env.EMAIL_USER,
      from: process.env.EMAIL_USER,
      subject: `Job Application: ${position}`,
      html: `
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Position:</b> ${position}</p>
        <p><b>Comments:</b> ${comments || "N/A"}</p>
      `,
      attachments
    };

    await sgMail.send(adminEmail);

    return NextResponse.json({ message: "Application sent successfully." });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { message: "Failed to send application.", error: error.message },
      { status: 500 }
    );
  }
}

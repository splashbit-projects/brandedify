import { NextResponse } from "next/server";
const sgMail = require('@sendgrid/mail');

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

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const adminEmail = {
      to: process.env.EMAIL_USER,
      from: process.env.EMAIL_USER,
      subject: `New Request: ${service}`,
      html: `
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company Name:</b> ${companyName}</p>
        <p><b>Website:</b> ${website || "N/A"}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
      `
    };

    await sgMail.send(adminEmail);

    return NextResponse.json({ message: "Request sent successfully." });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { message: "Failed to send the request.", error: error.message },
      { status: 500 }
    );
  }
}

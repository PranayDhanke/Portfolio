import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.User_name,
    pass: process.env.PassWord,
  },
});

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { message: "Missing required fields." },
      { status: 400 }
    );
  }

  if (!process.env.User_name || !process.env.PassWord || !process.env.My_Mail) {
    return NextResponse.json(
      { message: "Email service is not configured." },
      { status: 500 }
    );
  }

  try {
    const info = await transporter.sendMail({
      from: {
        name,
        address: process.env.User_name,
      },
      to: process.env.My_Mail,
      replyTo: email,
      subject,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json(
      { message: "Message sent successfully.", id: info.messageId },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "Error while sending email." },
      { status: 504 }
    );
  }
}

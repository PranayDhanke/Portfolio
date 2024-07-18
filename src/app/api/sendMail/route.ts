import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

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

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  try {
    const info = await transporter.sendMail({
      from: {
        name: name,
        address: email,
      },
      to: process.env.My_Mail,
      subject: subject,
      text: message,
    });

    return NextResponse.json(
      { "Message sent: %s": info.messageId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json("Error while send email", { status: 504 });
  }
}

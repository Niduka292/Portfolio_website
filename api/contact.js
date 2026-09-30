import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { fileURLToPath } from "node:url";

// Resolve the local environment file independently of the launch directory.
dotenv.config({ path: fileURLToPath(new URL("../.env", import.meta.url)) });
dotenv.config({ path: fileURLToPath(new URL("../backend/.env", import.meta.url)) });
dotenv.config();

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, msg: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); }
    catch { return res.status(400).json({ success: false, msg: "Invalid request" }); }
  }
  const { name, email, message } = body || {};
  if (![name, email, message].every(value => typeof value === "string" && value.trim())) {
    return res.status(400).json({ success: false, msg: "Please fill in all fields." });
  }
  const senderName = name.trim();
  const senderEmail = email.trim();
  const content = message.trim();
  if (senderName.length > 100 || senderEmail.length > 254 || content.length > 5000 ||
      /[\r\n]/.test(senderName) || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(senderEmail)) {
    return res.status(400).json({ success: false, msg: "Enter a valid email, a name under 100 characters, and a message under 5,000 characters." });
  }

  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS?.replace(/\s/g, "");
  if (!user || !pass) {
    return res.status(503).json({ success: false, msg: "The contact form is temporarily unavailable. Please try another contact link." });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000
  });
  try {
    const result = await transporter.sendMail({
      from: { name: "Portfolio Contact", address: user },
      to: process.env.EMAIL_TO?.trim() || user,
      replyTo: { name: senderName, address: senderEmail },
      subject: `New portfolio message from ${senderName}`,
      text: `Name: ${senderName}\nEmail: ${senderEmail}\n\n${content}`
    });
    if (!result.accepted?.length) throw new Error("Recipient not accepted");
    return res.status(200).json({ success: true, msg: "Your message was sent successfully!" });
  } catch (error) {
    console.error("Contact email failed", { code: error.code || "SEND_FAILED" });
    return res.status(502).json({ success: false, msg: "Unable to send your message. Please try again later." });
  } finally {
    transporter.close();
  }
}

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
  try {
    const { user_name, user_email, subject, message } = req.body;

   await resend.emails.send({
  from: "onboarding@resend.dev",
  to: "upshashank450@gmail.com",
  subject: subject,
  html: `
    <h2>New Portfolio Message</h2>
    <p><b>Name:</b> ${user_name}</p>
    <p><b>Email:</b> ${user_email}</p>
    <p><b>Subject:</b> ${subject}</p>
    <p><b>Message:</b></p>
    <p>${message}</p>
  `,
});
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
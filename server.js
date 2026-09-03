
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.send("Portfolio backend is running");
});

app.post("/send-email", async (req, res) => {
  try {
    const { user_name, user_email, subject, message } = req.body;

    if (!user_name || !user_email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["upshashank450@gmail.com"],
      subject: subject,
      replyTo: user_email,
      html: `
        <h2>New Portfolio Message</h2>

        <p><b>Name:</b> ${user_name}</p>
        <p><b>Email:</b> ${user_email}</p>
        <p><b>Subject:</b> ${subject}</p>

        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    console.log("Email sent:", data);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (err) {
    console.error("Server Error:", err);

    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

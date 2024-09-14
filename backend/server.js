import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./api/sendEmail.js";

const app = express();
const router = express.Router();

// Load environment variables from config.env
config({ path: "./config.env" });

// Enable CORS for the frontend URL
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the email sending route
router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate the input
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    // Send the email using the sendEmail function
    await sendEmail({
      email: "sap346044@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Attach the router to the app
app.use(router);

// Export the app for Vercel to handle
export default app;

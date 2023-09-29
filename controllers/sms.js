const twilio = require("twilio");
const dotenv = require("dotenv");

dotenv.config();

exports.sendsms = async (req, res) => {
  const to = req.body.to;

  // Phone number validation
  if (!to) {
    return res.status(400).json({ error: "Invalid phone number" });
  }

  // Initializing Twilio client
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH;
  const twilioPhoneNumber = process.env.TWILIO_PHONE;

  // console.log(accountSid)
  // console.log(authToken)
  // console.log(twilioPhoneNumber)

  const twilioClient = twilio(accountSid, authToken);

  try {
    // Use Twilio API to send SMS
    const message = await twilioClient.messages.create({
      from: twilioPhoneNumber,
      body: "Hello welcome to our company",
      to: to,
    });

    console.log("SMS sent successfully:", message.sid);
    res.status(200).json({ message: "SMS sent successfully" });
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

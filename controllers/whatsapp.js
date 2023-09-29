const twilio = require("twilio");
const dotenv = require("dotenv");
dotenv.config();

exports.whatsapp = async (req, res) => {
  const to = req.body.to;
  if (!to) {
    return res.status(400).json({ error: "Invalid phone number" });
  }

  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH;
  const twilioPhoneNumber = process.env.TWILIO_WHATSAPP;

  // console.log(accountSid)
  // console.log(authToken)
  // console.log(twilioPhoneNumber)

  console.log(to);
  const twilio_client = twilio(accountSid, authToken);
  try {
    const message = await twilio_client.messages.create({
      body: "Hello wellcome to our company.",
      from: `whatsapp:${twilioPhoneNumber}`,
      to: `whatsapp:${to}`,
    });

    console.log("WhatsApp message sent successfully:", message.sid);
    res.status(200).json({success: true, message: "WhatsApp message sent successfully!" });
  } catch (error) {
    if (error) {
      console.error("Error sending SMS:", error);
      return res
        .status(400)
        .json({ success: false, error: "Invalid phone number" });
    } else {
      console.error("Error sending SMS:", error);
      return res
        .status(500)
        .json({ success: false, error: "An error occurred on the server" });
    }
  }
};

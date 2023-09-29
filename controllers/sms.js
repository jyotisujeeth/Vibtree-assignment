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

 const welcomeMessage = "Welcome! Your verification code is 54875";


  

  const twilioClient = twilio(accountSid, authToken);

  try {
    // Use Twilio API to send SMS
    const message = await twilioClient.messages.create({
      from: twilioPhoneNumber,
      body: welcomeMessage,
      to: to, // user
    });

    console.log("SMS sent successfully:", message.sid);
    return res.status(200).json({ success: true,  message: "SMS sent successfully" });  
  } catch (error) {
    if(error){
          console.error("Error sending SMS:", error);
          return res
            .status(400)
            .json({ success: false, error: "Invalid phone number" });
    }
    else{
        console.error("Error sending SMS:", error);
        return res
          .status(500)
          .json({ success: false, error: "An error occurred on the server" });
    }
    
  }
};


const twilio = require("twilio");
const dotenv = require("dotenv");

dotenv.config();

exports.callclient = async (req, res) => {
  const to = req.body.to;


  
  if (!to) {
    return res.status(400).json({ error: "Invalid phone number" });
  }
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH;
  const twilioPhoneNumber = process.env.TWILIO_PHONE;

  const twilio_client = twilio(accountSid, authToken);

  try {
    const call = await twilio_client.calls.create({
      twiml:
        "<Response><Say>Hello Welcome! Your verification code is 54875.</Say></Response>",
      to: to,
      from: twilioPhoneNumber,
    });

    console.log("Created message using callback", call.sid);
    
   return  res.status(200).json({ success:true, message: "Created message using callback" });
  if() {

   }
  } 
  
  catch (error) {
    console.error("Error initiating call:", error);
    res.status(500).json({ success:false, error: "Internal Server Error" });
  }
};

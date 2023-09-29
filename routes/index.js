const express = require("express");

const route = express.Router();
const sms = require("../controllers/sms");
const call = require("../controllers/call");
const whatsapp = require("../controllers/whatsapp");

route.post("/sms", sms.sendsms);
route.post("/call", call.callclient);
route.post("/whatsapp", whatsapp.whatsapp);

module.exports = route;

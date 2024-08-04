//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kajoxjoe@gmail.com";
global.location = "Kitale,Kenya.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://jonah17:jonah17@cluster0.zicsfwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://dailycannon.com/static/uploads/2023/09/arsenal-fc-v-psv-eindhoven-group-b-uefa-champions-league-2023-24-5.jpg";
global.devs = "254768370578";
global.sudo = process.env.SUDO || "254768370578";
global.owner = process.env.OWNER_NUMBER || "254768370578";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";

global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.userImages = process.env.USER_IMAGES || "https://dailycannon.com/static/uploads/2023/09/everton-fc-v-arsenal-fc-premier-league-4-1024x682.jpg";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZ1cm9BOUVIVnYwNlFSb2pWOTdYNlM1dDhBUmN6YXRKYXZNV0ZaQXBXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlNqNlBvOENRZm1paFltS2tKL0srK2xhNFFCUVhIQ0N2SlRGaUdMQTVXTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRFI5Y1lqTm1WR2xKL084MEdWelFYYnNnNnYyTlk1dWpuTThqMk02WDBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSRXNUeVFBRm1GdlRSR1dsK3Jna0VlTGJlbndpVTRrelcxYUhiZnRHbGhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFHOUgxLzBabXlhOXJjQmYvS0QxNHkzR2xpeEUxRDJ6V1lBbWxZdG1uRmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktUL0JSMW5RTHc3bG9VelhKVXlMZm5EVSt6OGhmWjU5TkxPYmE1UDBVVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkttWDFHY09qYjhORUJDQklXVUZLaVVRZWhXdXlZWklsNXdvNnA5RklsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczd6ZGNqY0NmQkxxdm8wMEJ6SnA3YngwVjgxQmVpc0l5UXdrOGR3eWgxQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik82TG5hK3R2c1lYbTFEbU9veDJhQUYxTDZRb1h1dCtyeE1LWThrNlZnczVLbmJBTTYvcXBRV3JnQWdhTkFDenVEMkVZYWRGc2tlRDVBTGk3a3pkV0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM3LCJhZHZTZWNyZXRLZXkiOiJZcE1VeU5PL00rM21PdXNEZGFBS1J4QXdHRDRXejVRdmpFQ3A0MGVBT1h3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKMWdwWXJZM1JkZXhncGxncmN6QjZnIiwicGhvbmVJZCI6IjZmNjc0NTBiLWFmODctNDMxMi1hZjRhLTJkYWQ0YzQ2YzJjZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOblFxRDZoM05RbmtxQVdCTlU4OU5saFN2cDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXBEYmdGcDJVSnA1QkNlRXV0SWE3blpwVGljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZHNTVaQ1BYIiwibWUiOnsiaWQiOiIyNTQ3NjgzNzA1Nzg6NjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01hYmhOY0JFTUtvdkxVR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImU4SW41NldidTlqRmQ5Y3NDYllxY0NvK2lEZk1mYU1lTDZhcXYxQk8yVVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImkvK2k2WHU3YXFoeDJ5cktsYXN6OWpZdHF6bklraGh5TzEyY25haHFTNU95ZHVRSHk2eGx2QlhhM05QaGtMVldJdFYxaXZmd2xHYmNHc2FOYVE1TUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJL0dmMGJ6dElwOWdpdE10T2RUOGhhVmdDb1ZqZGxoWWxmS0l1aWpFQjVoalBBOTF4c2pad1o4RzdvQm9ZWkoxM0R1UnNuUTZIcitDY2s5ZXRHU0pEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc2ODM3MDU3ODo2OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYdkNKK2VsbTd2WXhYZlhMQW0yS25BcVBvZzN6SDJqSGkrbXFyOVFUdGxFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzUwMDMzfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Powered by Jonnie the Great-The best bot programmer.",
  author: process.env.PACK_AUTHER || "Jonnie-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "KaJonex-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "Jonnie",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Trossard").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0Fvd001VTdwdktuUUVDMFUybVptTHh2cTJmRk53WFpvVllPZ3ZmbnFFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NQMDNBUmpZZjdXYTdSTkh6YzRPWk91RGJxaUJYdzJ4MTRkQnlYbCtnND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRnVzN0owNWRUVGkyZ2RTRHA4c21SV3E0VjNqQWFFV24wVTBlVW1yVzE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QlZRdlh3b3hEUjluc0k1bHZDaGkvd3lDSW5aK2k5ZlJJdm41V0U0blJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdMelRKOXAxSjlZV1lNMytWckszMlp5dFU0WUYyekpFb2ZJL0Q5WnhyM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEOUdQd0FnVkNiSTRxTUtsOUNXdmZ0ZTFFNytKMUpvMW53OVp0Q204WHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhwZlNsVmxaNGFCL0hzSHFxQ0lheXRySUpCeVVST0VndXlQVGxTUHZtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3ZiQTFDMFBhNWdpUVdNVk1BN0RqZC9xSTdMTEpoZExqTGFtTjlsMDlFbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5WY2t1WkhRR0dMQUVuUTBNNVF2clBjcmFBc3FMaGJnSmpLS0k5cldvQ2Y4WDZtZFBrYkxuMHVvSlFuM3FSd21teDlFUVZxTHRsaVpYQ3kzWTFMVURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6Iks2RXhKK1p0TThLQzVxanRaU3IxbUtNd2UyalZFRG0yZ0pSZFpZWnJRSkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldhZ1NKdEJRVE8yNGpDX0t6RjJnUnciLCJwaG9uZUlkIjoiMjIwYTJjMDMtYmRlYS00MjViLWE3NDYtNDY1ODIwYmJkNjQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlnOGFHSU96TUVKemV2RnN3Wm5SNlBPbXlGbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSFhxSTFTaTRPT1N4N05wcHg2cXZGM3FUdXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTkVNTUdDVjQiLCJtZSI6eyJpZCI6IjI1NDc2ODM3MDU3ODo3N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWliaE5jQkVJUzQzYlVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZThJbjU2V2J1OWpGZDljc0NiWXFjQ28raURmTWZhTWVMNmFxdjFCTzJVUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVVZkK1RTdUtlblhWMk1pbXdqeUFsaUNuTW42RUpSeWpRT1RFenNxYjZlMkJYbk9sN205RnNXMnpYSmRkRGFhOExQRElGMm1kQndQTWNCaTJRaXlYQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Im9ObWtWMDREZWN6bDcvRDFHdEVWTGhjWjk0b3JQeSs5dlQ0NzRkem5pUnMzdGt0WE9CTmlSa0htRCtPbXlVOEdmZE5QMkwrV1IzYVZXbnFHclpTdkJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzY4MzcwNTc4Ojc3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh2Q0orZWxtN3ZZeFhmWExBbTJLbkFxUG9nM3pIMmpIaSttcXI5UVR0bEUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMyOTI2OTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1A2In0="
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

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
global.sudo = process.env.SUDO || "254793019089";
global.owner = process.env.OWNER_NUMBER || "254793019089";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";

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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05OdGliY3lnQmROdHVtSXJab1ZTMElzVmY1eC9hazdNVDIwbUFiTzhHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidk13MGtraVhNOWlBVFQ4OHF3b05mVFE1eDNQNkxBQlJVRUNkUnFKcmdTUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTWUzZ1ZLK1dGbVpGWk1pNVV2NS8rcmRpSktCYVV1SVA4TlVyOUhPVWtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxUDU4WTBLc1ptbnhiQUR2K25HemNYekxnZk9PTVo5VzlzZm5qYTBsY1hRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCL1BSM3hmVkZGUzIwLzRGVHhUODg4UnJVbmt3Sm1NeVBzWUo0cTJFMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVQb05LNU9zVU5scVRpODV1TnJKOXhnTE1CeHhubDVmNXJGYXJwODJQZ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUw0dzV1Wm44bGl1Y0g2YXNycC9UaUZBdG1uYk5mTVJRbmFVSytZbEdIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWdVSkw1S3lrWkFQVXdYcEVZOXBqazYxVWhIOVVLSnZ6L0taMUpIZlhWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV4cVh2TndPSDh0c1pEandoYXlnOGgyS0syYlFMUmJ4U3lzcSs4ZGNHTU5CeDUxc1VpNy9vNzE0aTFsdHRhZTh0aTFDN2loYit3K2YxTytYZWpTdWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6IlZJNm0rWkxaVmtxbC94NjV3TlZTR0lUc013TUNqRWRNSFNNc2FWbGVTOFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzkzMDE5MDg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY0QjgzMURBNjM5Mzg3MjAzNEFCMTIyNTlEOTU2OTVCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjc2OTk3NzR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5MzAxOTA4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1QzkxNDlDNjIyOEI4QTlFMkYzRkY5RTlEM0M4NkYwMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3Njk5Nzc1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsb0hCc3FheVFPcWY2bF8yVFpHWkxRIiwicGhvbmVJZCI6IjIwYjNlMzRhLTRmMGUtNDRhOS04NDU5LTQ1ODI5Zjk3NTkzMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsaUpaMnE2YXpBQUQzakpvTWlJWFhTbXhNSzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1JNSHdNbTJCR2ZGRnhhWDY1NGZtK2xFSjVZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE3QU43U01EIiwibWUiOnsiaWQiOiIyNTQ3OTMwMTkwODk6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+Sm9ubmll4pq94p2k8J+YjiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzNsczUwSEVMZTI2cmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR2wzMHlld09MaEhycThXcjZjdWpFMkdoOU4yb3ZGME1xSjJXTE0yUzBnZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVlVYMGdoTENEejhPNC9iakcvN282MTB2ZEJzdFBISUlyc1UyaUE1V2NDUHcrSVY2Vmc3V1ZuU2hqZUQ0RllNYnlibnQvWkJOa2poMFJKbzJpelR5QUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjMwQ3ltK1NzQy9MY04wTEEyMFV3MzNaQkFvQjllOFVDa1hUSVAycFdRYkM3SVdVTkhrRkJ1bXBSWGtCT2tacCtySWRneUNtdExDdHlnNnpDcXlzU2dRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzkzMDE5MDg5OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUnBkOU1uc0RpNFI2NnZGcStuTG94TmhvZlRkcUx4ZERLaWRsaXpOa3RJSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzY5OTc3MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFORFUifQ=="
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

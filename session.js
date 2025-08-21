//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RncDBOb3ZZNlV5blMzN2NRVDBkOFRiQWRhbzhPdzNHWVlRTHRBRCtFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VTNXFXK0taMUpIdEtTS0I4VlV0T1NkRFFWZkIyRXpqRzM0SE81T3hHWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TG9qS0Q3RGRWOEs3N3YrTVQ2d212T25Lem9seDBETnpnbG54TUJ6MG0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYN0V0am5sSDJTOWZmcHM3eEhVVzErWCtzQ1BLMjNMSzNkTUtvcG1MSUE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHMVpTb3luNVlzSlI2bzY1YWdhVjBnRGFjQjZibDVLMk02TGpKek9sMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ4dFR6UExPYlQ2WW5GdmxZNjRBWEs0S1cxL3JhZkVlVkFJZjBhM09PQWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0o2ZVFzTGQ5UkpxcGhVY0l4MkJwaGlySStWZlljRExycmVYK1dqODVVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzF4QlU5djhsaWkxenBKU2huVlFONXMyMmhtVFlZUDlTd2RMMXNiWHNXVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAvZDRUcHpPaFRubDJKbjR6bHlWcFRrbml0RVJBWWJLUkNHbDhkMDZ5NXhyV3ZxOUkrREI2ekZ5QWUxSi81UjMzZ3lPcG54WDI2U0dBL3BDYWZkd2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJxK1E3aEsrM0JwL0dCbS9pZjdUNksxejRtWWpwNVZkRG4rTlB5aDRBd1QwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxcU5HQ25OelNBR0JYaGhUZkN6SldRIiwicGhvbmVJZCI6ImJkZDU5YjNkLWQ4NzItNDYxZC04YTU1LWVhMDYwZDNlOGM5ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT25TTVM2REJPQnU0YUsxcEE0UTBxUmdaV0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekZCYS83UDBab3YwcjRsVkRURmhQRElwZ0lBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpNREJXN0I5IiwibWUiOnsiaWQiOiI5NDcwNTc0NTEyOTo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFuamFuYSB1ZGFyYSIsImxpZCI6IjE1NTY3NjAwNTM3NjIyMTo2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3ppamFNRUVNWHpuTVVHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieGZTV0ZNZnNqNVJzRkNsOU9EMzBYcTQ5SW5qcTQrVGtveFdFdlRtKy8zQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWmtiUDMzSjdQNWlWeVNZb2xpUlB0VGpHaEtncVlIS1d6RnlrbHN4aUV4emY5eDdtNEt6R252RTlnekVEeDB1VndPa2ZZNCtNMm4vSVlQRzNuYk9GQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjBVQVVMeGZnU0I0Q1J2SkdraXlrSS9MckgxZmVUa0JNa2k4QnhqRXIrOUtZdGZGZHRGR1BYa0FleEwyVGNHR09NbFExUUN4T0k2dTRuaUhKUWwzOGdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDU3NDUxMjk6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjWDBsaFRIN0krVWJCUXBmVGc5OUY2dVBTSjQ2dVBrNUtNVmhMMDV2djl3In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU3ODk3NzksImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

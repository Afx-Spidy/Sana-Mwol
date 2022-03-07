/* Copyright (C) 2020 Yusuf Usta.
re edited by afnan-plk  
SANA 
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v7.3.6',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.SANA_SESSION === undefined ? '' : process.env.SANA_SESSION,
    AFN: process.env.ALL_CAPTION === undefined ? 'MADE BY SANA' : process.env.ALL_CAPTION,
    STANDPLK: process.env.STANDBY_MODE === undefined ? 'off' : process.env.STANDBY_MODE,
    PM_BLOCK: process.env.PM_BLOCK === undefined ? 'false' : process.env.PM_BLOCK,
    CB: process.env.CALLER_BLOCK === undefined ? 'false' : process.env.CALLER_BLOCK,
    Z_SANA_AI: process.env.Z_SANA_AI === undefined ? 'false' : process.env.Z_SANA_AI,
    PLK: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    NP: process.env.LIMIT === undefined ? 'false' : process.env.LIMIT,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEBTN: process.env.ALIVE_BUTTON === undefined ? 'ᴇɴɢᴀɴᴇʏᴜɴᴅ sᴀɴᴀ ᴍᴡᴏʟ🌝' : process.env.ALIVE_BUTTON,
    ALIVEBTN2: process.env.ALIVE_BUTTON2 === undefined ? 'ᴘᴏᴡᴇʀᴇᴇsʜ🤩' : process.env.ALIVE_BUTTON2,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    AFNN: process.env.TAG_REPLY === undefined ? '917025994178@s.whatsapp.net' : process.env.TAG_REPLY,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    PLKIMG: process.env.LIST_IMG === undefined ? 'https://i.imgur.com/zdcqaaG.jpeg' : process.env.LIST_IMG,
    WEL_GIF: process.env.WEL_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WEL_GIF,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GIF_BYE,
    BOTPLK: process.env.BOT_NAME === undefined ? 'SANA BOT' : process.env.BOT_NAME,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    ALL_IMG: process.env.ALL_IMG === undefined ? 'https://i.imgur.com/TR4CYrZ.jpg' : process.env.ALL_IMG,
    ALL_NAME: process.env.ALL_NAME === undefined ? 'Abu Ser' : process.env.ALL_NAME,
    PLKBGM: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    MAHN: "919072790587,0",
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    BOTCREATOR: "Afx-Abu",
    SUPPORT: "919072790587-1635775355",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};


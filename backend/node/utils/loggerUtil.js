// Basic logger utility
const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, '..', 'logs', 'server.log');

function log(message) {
  const timestamp = new Date().toISOString();
  const logMsg = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFile, logMsg);
}

module.exports = { log };

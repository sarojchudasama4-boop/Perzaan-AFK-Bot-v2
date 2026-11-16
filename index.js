const fs = require('fs');
const settings = JSON.parse(fs.readFileSync('./settings.json', 'utf8'));

console.log('Settings loaded for:', settings['bot-account'].username);
//

require('dotenv').config();
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const schedule = require('node-schedule');
const openai = require('openai');

openai.apiKey = process.env.OPENAI_KEY;

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

const number = process.env.PHONE_NUMBER;

const reminders = [
    { cron: "0 8-20/4 * * *", prompt: "Generate a friendly reminder to hydrate." },
    { cron: '0 7 * * *', prompt: "Generate a cheerful good morning message." },
    { cron: '0 18 * * 1-5', prompt: "Generate a message to wind down from work." },
    { cron: '0 20 * * *', prompt: "Generate a reminder to prepare lunch for tomorrow." },
    { cron: '0 19 * * *', prompt: "Generate a message to encourage self-care activities." },
    { cron: '0 22 * * *', prompt: "Generate a goodnight message with a word of praise." },
];
for (let reminder of reminders) {
    schedule.scheduleJob(reminder.cron, async function() {
        let customizedPrompt = "This is for my girlfriend, it should be cheeky and lovely. " + reminder.prompt;
        let response = await openai.Completion.create({
            engine: "text-davinci-002",
            prompt: customizedPrompt,
            max_tokens: 60
        });

        let messageText = response.choices[0].text.trim();
        client.sendMessage(number, messageText);

        // Log the time and the message that was sent
        let currentTime = new Date();
        console.log(`[${currentTime.toLocaleString()}] Message sent: "${messageText}"`);
    });
}


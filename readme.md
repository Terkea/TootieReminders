# Tootie Reminders 💌💖

Are you looking to sprinkle some magic into your daily routine with your special one? Do you want to keep the spark alive in your relationship with some charming, caring, and, dare we say, a bit cheeky, daily reminders? If so, then this is the project for you! 🥰

Tootie Reminders is a delightful WhatsApp bot powered by OpenAI's GPT-3. With this enchanting tool, you can schedule daily reminders that will be delivered straight to your loved one's WhatsApp chat, helping you add a dash of thoughtfulness to your everyday communication.

But this isn't just your ordinary reminder bot. Oh no! This cheeky assistant uses the power of AI to tailor-make messages that are guaranteed to bring a smile to your beloved's face.💘

Think of it as a digital Cupid, firing its little arrows of love throughout the day! From a gentle reminder to hydrate 💧 to a friendly nudge about self-care routines 💪, this bot is here to make your loved one feel special, valued, and cared for. What better way to say "I'm thinking about you"?

And the cherry on top? These messages aren't your run-of-the-mill, standard-issue notifications. They're personalized, heartwarming, and full of charm – just the way your loved one deserves!

So why wait? Take your relationship to a whole new level with Tootie Reminders. It's more than just a reminder bot. It's a testament to the power of technology in strengthening human bonds, one message at a time! 💖💬

Ready to spread the love? Dive in and let's make the world a little more caring, one reminder at a time.

# How to Use Tootie Reminders
This guide will help you set up and use Tootie Reminders, the cheeky WhatsApp bot that's all set to help you keep your loved one in high spirits!

## Setup
### Install Dependencies
```
npm install
```

## Setup Environment Variables:
We use environment variables to securely store sensitive information. You'll find a file in the root directory named `.env_template`. Make a copy of this file and name it `.env`.
```
cp .env_template .env
```
Open up the newly created `.env` file and you'll see something like this:
```
OPENAI_KEY=
PHONE_NUMBER=
```
Fill in the `OPENAI_KEY` with your OpenAI key and `PHONE_NUMBER` with the recipient's phone number. Make sure to keep this file safe and do not commit it or share it.

### Set Up Your OpenAI API Key
In order to generate personalized messages, you need to use OpenAI's GPT-3. For this, you will need an API key from OpenAI. Visit their website to sign up and get your key.

Once you have your key, replace 'your_openai_api_key' in the index.js file with your actual OpenAI API key.

### Set Up Recipient's Number
Replace `1234567890@c.us` with the recipient's number (include country code without the + sign) in the following format: `<country-code-without-+><number>@c.us`. For example, for a US number (123) 456-7890, you would enter `11234567890@c.us`.

### Run the Script
```
node index.js
```
You'll see a QR code pop up in your terminal. Scan this code with the WhatsApp account you want to send the messages from, and voilà! Your reminders are set.

### Customization
You can customize the times and content of your reminders. This project uses the `node-cron` library to schedule tasks, and cron strings to define the schedule.

In the `reminders` array, each object has a `cron` property (the schedule) and a `prompt` property (the message prompt that's sent to OpenAI GPT-3 to generate the message).

If you want to change the schedule or the content of the reminders, you can simply edit the cron strings or the prompts in this array.

That's it! You're all set to add a little more joy to your loved one's day with Tootie Reminders.

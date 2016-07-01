#Mincha Reminders

A small sms bot that can to remind people about a local mincha minyan or really anything else.
All it is, is a scheduled sms sender using Nexmo.

##config
Environment variables `NEXMO_API_KEY` and `NEXMO_API_SECRET` need to be set to your nexmo credentials.

Additionally the from and to numbers and the sms message content must be set in the `MINCHA_REMINDERS_FROM_NUMBER`, `MINCHA_REMINDERS_TO_NUMBER`, and `MINCHA_REMINDERS_TEXT_MESSAGE_CONTENT` environment variables, respectively.

Schedules are set using later.js in server/config/schedule.js (there is sample config there)

##get it up and running
1. set up the config
2. npm install
3. npm install -g babel-cli
4. npm build
5. npm start
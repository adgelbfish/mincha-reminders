#Mincha Reminders

A small group me bot to remind people about a local mincha minyan

Environment variables `NEXMO_API_KEY` and `NEXMO_API_SECRET` need to be set to your nexmo credentials.

Additionally the from and to numbers and the sms message content must be set in the `MINCHA_REMINDERS_FROM_NUMBER`, ` and `MINCHA_REMINDERS_TEXT_MESSAGE_CONTENT` environment variables respectively

Schedules are set using later.js in lib/schedule.js
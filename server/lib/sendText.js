import nexmo from './nexmoInit'

const fromNumber = process.env.MINCHA_REMINDERS_FROM_NUMBER;

const sendText = (to, message) =>
    nexmo.sendTextMessage(fromNumber, to, message, {}, (err, response) => {
            if (err) {
                console.log(err);
            } else {
                console.log(response);
            }
        }
    );

export default sendText
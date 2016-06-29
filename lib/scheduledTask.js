import sendText from './sendText'

const groupMeNumber = process.env.MINCHA_REMINDERS_TO_NUMBER;
const textMessageContent = process.env.MINCHA_REMINDERS_TEXT_MESSAGE_CONTENT;

const scheduledTask = () =>
    sendText(groupMeNumber, textMessageContent);

export default scheduledTask
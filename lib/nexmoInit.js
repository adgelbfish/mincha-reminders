import nexmo from 'easynexmo'

const nexmoKey = process.env.NEXMO_API_KEY;
const nexmoSecret = process.env.NEXMO_API_SECRET;

nexmo.initialize(nexmoKey, nexmoSecret, false);

export default nexmo
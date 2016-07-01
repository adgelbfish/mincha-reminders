import later from 'later'

later.date.localTime();

const schedule = later.parse.text('on monday, tuesday, wednesday, thursday at 1:44 pm');

export default schedule
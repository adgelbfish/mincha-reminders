import later from 'later'
import schedule from '../config/schedule'
import scheduledTask from './scheduledTask'

const runSchedule = () => {
    const t = later.setInterval(scheduledTask, schedule);
    console.log('schedule runner started')
};

export default runSchedule
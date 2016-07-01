import chai from 'chai'
import schedule from '../server/config/schedule'

chai.should();

describe('schedule', () => {
    describe('#configuration', () => {
        it('is valid', () => {
            schedule.error.should.equal(-1);
        })
    });
});
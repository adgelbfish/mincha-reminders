import express from 'express'
import runSchedule from './lib/runSchedule'

const app = express();

app.use(express.static('./public'));

app.get('/inbound', (req, res) => {
        console.log(req.query);
        res.send('message received')
    }
);

app.listen(3000);

runSchedule();

import express from 'express'
import runSchedule from './lib/runSchedule'

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index')
}
)

app.get('/inbound', (req, res) => {
        console.log(req.query);
        res.send('message received')
    }
);

app.listen(3000);

runSchedule();

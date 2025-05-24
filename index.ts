import express from 'express';
import reminderRouter from './routers/reminders';

const app = express();

app.use('/reminders', reminderRouter);

app.get('/', (req, res) => {
    res.send('Hello WOrld');
}) 

app.listen(8000, () => console.log('Server Started--->>>.+++..'));
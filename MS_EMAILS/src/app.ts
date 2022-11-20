import express from 'express'
import { Consumer } from './KafkaService/Consumer'

const app = express();

const consumer = new Consumer("my-first-group");
consumer.consume({ topics: ["welcome-user", "new-bets", "recover-password", "schedule-remember"], fromBeginning: false });

const port = 3000;
// app.get('/new-user', (req, res) => {

// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
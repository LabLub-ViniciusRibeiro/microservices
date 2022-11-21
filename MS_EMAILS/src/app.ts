import express from 'express'
import { Consumer } from './KafkaService/Consumer'
import { routes } from './routes/index'

const app = express();
app.use(express.json());

const consumer = new Consumer("my-first-group");
consumer.consume({ topics: ["welcome-user", "new-bets", "recover-password", "schedule-remember"], fromBeginning: false });

const port = 3000;

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
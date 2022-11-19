import express from 'express'
import { Consumer } from './KafkaService/Consumer'


const app = express();

const consumer = new Consumer("my-first-group");
consumer.consume({ topic: "welcome", fromBeginning: false });

const port = 3000;
// app.get('/new-user', (req, res) => {
  
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const consumer = kafka.consumer({ groupId: 'test-group' })

// await consumer.connect()
// await consumer.subscribe({ topic: 'new-user', fromBeginning: true })

// await consumer.run({
//   eachMessage: async ({ topic, partition, message }) => {
//     console.log({
//       value: message.value.toString(),
//     })
//   },
// })
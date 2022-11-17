const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "be1dc180aa14ca",
    pass: "86ab6e581522f5"
  }
});

const port = 3000;
app.get('/new-user', (req, res) => {
  const mailData = {
    from: 'youremail@gmail.com',  // sender address
      to: 'myfriend@gmail.com',   // list of receivers
      subject: 'Sending Email using Node.js',
      text: 'That was easy!',
      html: { path: './templates/newUser.edge' },
    };
    transport.sendMail(mailData, (error) => {
      if (error) {
        return console.log('erro');
      }

      res.status(200).send({ message: 'mail sent' })
    })
})

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
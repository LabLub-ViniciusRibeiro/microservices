import nodemailer from 'nodemailer'


export class HandleEmail {

    public transport: nodemailer.Transporter<any>;

    constructor() {
        this.transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "be1dc180aa14ca",
                pass: "86ab6e581522f5"
            }
        });
    }

    public async welcomeEmail() {
        const mailData = {
            from: 'youremail@gmail.com',  // sender address
              to: 'myfriend@gmail.com',   // list of receivers
              subject: 'Welcome new user',
              text: 'Welcome!!',
              html: { path: './templates/newUser.edge' },
            };
            await this.transport.sendMail(mailData);
    }
}
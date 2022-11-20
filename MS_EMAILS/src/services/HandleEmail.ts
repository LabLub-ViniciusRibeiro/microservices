import nodemailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/json-transport';


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
        const mailData: MailOptions = {
            from: 'youremail@gmail.com',  // sender address
            to: 'myfriend@gmail.com',   // list of receivers
            subject: 'Welcome new user',
            text: 'Welcome!!',
            html: { path: './templates/newUser.edge' }
        };
        await this.transport.sendMail(mailData);
    }

    public async newBetsEmail() {
        const mailData: MailOptions = {
            from: 'youremail@gmail.com',  // sender address
            to: 'myfriend@gmail.com',   // list of receivers
            subject: 'You have purchased new bets!',
            text: 'New bets!!',
            html: { path: './templates/newUser.edge' }
        };
        await this.transport.sendMail(mailData);
    }

    public async recoverPasswordEmail() {
        const mailData: MailOptions = {
            from: 'youremail@gmail.com',  // sender address
            to: 'myfriend@gmail.com',   // list of receivers
            subject: 'Password recovery',
            text: 'Here is your token to recover the password!',
            html: { path: './templates/newUser.edge' }
        };
        await this.transport.sendMail(mailData);
    }

    public async rememberToPlayEmail() {
        const mailData: MailOptions = {
            from: 'youremail@gmail.com',  // sender address
            to: 'myfriend@gmail.com',   // list of receivers
            subject: 'We miss you!',
            text: 'Would you like to play?',
            html: { path: './templates/newUser.edge' }
        };
        await this.transport.sendMail(mailData);
    }
}
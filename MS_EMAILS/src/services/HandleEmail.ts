import nodemailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/json-transport';
import { compile } from 'handlebars';
import mjml2html from 'mjml';
import hbs from 'nodemailer-express-handlebars';

export class HandleEmail {

    private transport: nodemailer.Transporter<any>;
    private from = 'contact@lotteryapp.com'

    constructor(private to: string) {
        this.transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "be1dc180aa14ca",
                pass: "86ab6e581522f5"
            }
        });
        const options = {
            viewEngine: {
                extname: '.html', // handlebars extension
                layoutsDir: 'views/email/', // location of handlebars templates
                defaultLayout: 'newUser', // name of main template
                partialsDir: 'views/email/', // location of your subtemplates aka. header, footer etc
            },
            viewPath: 'views/email',
            extName: '.html'
        }
        this.transport.use('compile', hbs(options))
    }

    public async welcomeEmail() {

        const mailData = {
            from: this.from,  // sender address
            to: this.to,   // list of receivers
            subject: 'Welcome new user',
            text: 'Welcome!!',
            template: 'newUser',
            context: {
                message: 'Hello World',
                people: ['Vini', 'Ana']
            }

        };
        await this.transport.sendMail(mailData);
    }

    public async newBetsEmail() {
        const mailData: MailOptions = {
            from: this.from,  // sender address
            to: this.to,   // list of receivers
            subject: 'You have purchased new bets!',
            text: 'New bets!!',
            html: { path: './templates/newUser.edge' }
        };
        await this.transport.sendMail(mailData);
    }

    public async recoverPasswordEmail() {
        const mailData: MailOptions = {
            from: this.from,  // sender address
            to: this.to,   // list of receivers
            subject: 'Password recovery',
            text: 'Here is your token to recover the password!',
            html: { path: './templates/newUser.edge' }
        };
        await this.transport.sendMail(mailData);
    }

    public async rememberToPlayEmail() {
        const mailData: MailOptions = {
            from: this.from,  // sender address
            to: this.to,   // list of receivers
            subject: 'We miss you!',
            text: 'Would you like to play?',
            html: { path: './templates/newUser.edge' }
        };
        await this.transport.sendMail(mailData);
    }
}
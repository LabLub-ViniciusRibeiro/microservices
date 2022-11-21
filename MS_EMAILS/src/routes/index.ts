import { Router } from "express";
import { HandleEmail } from "../services/HandleEmail";

export const routes = Router();


routes.post('/user', (req, res) => {
    const { email } = req.body;
    const handleEmail = new HandleEmail(email);
    try {
        handleEmail.welcomeEmail();
        res?.status(201).send({ message: 'New user email sent' });
    } catch (error) {
        res?.status(400).send({ message: 'Error during email sending', error: error });
    }
});

routes.post('/bets', (req, res) => {
    const { email } = req.body;
    const handleEmail = new HandleEmail(email);
    try {
        handleEmail.newBetsEmail();
        res?.status(201).send({ message: 'New bets email sent' });
    } catch (error) {
        res?.status(400).send({ message: 'Error during email sending', error: error });
    }
});

routes.post('/recover-password', (req, res) => {
    const { email } = req.body;
    const handleEmail = new HandleEmail(email);
    try {
        handleEmail.recoverPasswordEmail();
        res?.status(201).send({ message: 'Recover password email sent' });
    } catch (error) {
        res?.status(400).send({ message: 'Error during email sending', error: error });
    }
});

routes.post('/schedule-remember', (req, res) => {
    const { email } = req.body;
    const handleEmail = new HandleEmail(email);
    try {
        handleEmail.rememberToPlayEmail();
        res?.status(201).send({ message: 'Remember to play email sent' });
    } catch (error) {
        res?.status(400).send({ message: 'Error during email sending', error: error });
    }
});
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import * as types from "../types";

const router = express.Router();
dotenv.config();


import { logInNew, userInfo } from "../dbConnectionManager";

router.post('/logInNew', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try{
    const result = await logInNew(username, password);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});

router.post('/userInfo', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await userInfo(username);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});




//module.exports = router;
export default router;
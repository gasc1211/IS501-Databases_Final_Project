"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router = express_1.default.Router();
dotenv_1.default.config();
const dbConnectionClient_1 = require("../dbConnectionClient");
// Validar en el LogIn que el usuario existe en la base de datos
/*
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
*/
// Validar en el LogIn que el usuario existe en la base de datos
router.post('/logIn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const result = yield (0, dbConnectionClient_1.logIn)(username, password);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/userInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionClient_1.userInfo)(username);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/userOrdenActive', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionClient_1.userOrdenActive)(username);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//Recupera los datos de las ordenes activas de un cliente
router.post('/userOrdenActive', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionClient_1.userOrdenActive)(username);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//Recupera los datos de las ordenes finalizadas de un cliente
router.post('/userOrdenFinished', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionClient_1.userOrdenFinished)(username);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//Recupera los datos de las tarjetas de los clientes
router.post('/userAssociatedCard', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionClient_1.userAssociatedCard)(username);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//module.exports = router;
exports.default = router;
//# sourceMappingURL=Client-routes.js.map
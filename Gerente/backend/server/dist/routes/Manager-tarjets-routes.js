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
const dbConnectionManagerTarjets_1 = require("../dbConnectionManagerTarjets");
const dbConnectionManagerTarjets_2 = require("../dbConnectionManagerTarjets");
const router = express_1.default.Router();
dotenv_1.default.config();
//----------------------------------------------------------------------------------------------------Mostrando tablas
router.post('/tableCaracteristicas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_1.tableCaracteristicas)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableCategorias', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_1.tableCategorias)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableClientes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_1.tableClientes)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableDanios', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_1.tableDanios)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableEmpleados', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_1.tableEmpleados)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableEstatusOrden', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_1.tableEstatusOrden)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableExtras', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_1.tableExtras)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableFacturas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_1.tableFacturas)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableListaNegra', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_1.tableListaNegra)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableLocalidades', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_2.tableLocalidades)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableMarcas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_2.tableMarcas)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableModelos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_2.tableModelos)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableMultas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_2.tableMultas)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableOrdenes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_2.tableOrdenes)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tablePuestos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_2.tablePuestos)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableReporteFinal', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_2.tableReporteFinal)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableReporteInicial', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_2.tableReporteInicial)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableSeguros', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_2.tableSeguros)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableTarjetas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_2.tableTarjetas)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tableVehiculos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const result = yield (0, dbConnectionManagerTarjets_2.tableVehiculos)();
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//module.exports = router;
exports.default = router;
//# sourceMappingURL=Manager-tarjets-routes.js.map
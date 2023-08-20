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
const dbConnectionManagerSeeMoore_1 = require("../dbConnectionManagerSeeMoore");
const dbConnectionManagerSeeMoore_2 = require("../dbConnectionManagerSeeMoore");
const dbConnectionManagerSeeMoore_3 = require("../dbConnectionManagerSeeMoore");
const dbConnectionManagerSeeMoore_4 = require("../dbConnectionManagerSeeMoore");
const dbConnectionManagerSeeMoore_5 = require("../dbConnectionManagerSeeMoore");
const dbConnectionManagerSeeMoore_6 = require("../dbConnectionManagerSeeMoore");
//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasCaracteristicas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_1.verMasCaracteristicas)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/caracteristicaInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_1.caracteristicaInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasCategorias', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_1.verMasCategorias)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/categoriasInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_1.categoriasInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasClientes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_1.verMasClientes)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/clientesInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_1.clientesInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasDanios', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_1.verMasDanios)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/daniosInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_1.daniosInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasEmpleados', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_1.verMasEmpleados)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/empleadosInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_1.empleadosInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasEstatus', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_2.verMasEstatus)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/estatusInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_2.estatusInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasExtras', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_2.verMasExtras)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/extrasInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_2.extrasInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasListaNegra', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_2.verMasListaNegra)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/listaNegraInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_2.listaNegraInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasLocalidades', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_2.verMasLocalidades)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/localidadesInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_2.localidadesInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasMarcas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_3.verMasMarcas)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/marcasInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_3.marcasInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasModelos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_3.verMasModelos)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/modelosInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_3.modelosInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasMultas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_3.verMasMultas)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/multasInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_3.multasInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasOrdenes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_3.verMasOrdenes)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/ordenesInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_3.ordenesInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/ordenesChangeState', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_6.ordenesChangeState)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasPuestosEmpleados', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_3.verMasPuestosEmpleados)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/puestosEmpleadosInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_3.puestosEmpleadosInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasReporteInicial', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_4.verMasReporteInicial)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/reporteInicialInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_4.reporteInicialInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasSeguros', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_4.verMasSeguros)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/segurosInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_4.segurosInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasTarjetas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_4.verMasTarjetas)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/tarjetasInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_4.tarjetasInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasVehiculos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_4.verMasVehiculos)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/vehiculosInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_4.vehiculosInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasFacturasRI', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_5.verMasFacturasRI)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/verMasFacturasRF', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_5.verMasFacturasRF)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/facturasRIInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_5.facturasRIInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
router.post('/facturasRFInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield (0, dbConnectionManagerSeeMoore_5.facturasRFInfo)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
}));
exports.default = router;
//# sourceMappingURL=Manager-see-moore-router.js.map
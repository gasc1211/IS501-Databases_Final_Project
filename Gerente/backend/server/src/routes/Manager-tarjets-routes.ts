import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { tableCaracteristicas, tableCategorias, tableClientes, tableDanios, tableEmpleados, tableEstatusOrden, tableExtras, tableFacturas, tableListaNegra } from "../dbConnectionManagerTarjets";
import { tableLocalidades, tableMarcas, tableModelos, tableMultas,tableOrdenes, tablePuestos, tableReporteFinal, tableReporteInicial, tableSeguros, tableTarjetas, tableVehiculos } from "../dbConnectionManagerTarjets";

const router = express.Router();
dotenv.config();

//----------------------------------------------------------------------------------------------------Mostrando tablas
router.post('/tableCaracteristicas', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableCaracteristicas();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableCategorias', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableCategorias();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableClientes', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableClientes();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableDanios', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableDanios();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableEmpleados', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableEmpleados();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableEstatusOrden', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableEstatusOrden();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableExtras', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableExtras();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableFacturas', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableFacturas();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableListaNegra', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableListaNegra();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableLocalidades', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableLocalidades();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableMarcas', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableMarcas();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableModelos', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableModelos();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableMultas', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableMultas();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableOrdenes', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableOrdenes();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tablePuestos', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tablePuestos();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableReporteFinal', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableReporteFinal();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableReporteInicial', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableReporteInicial();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableSeguros', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableSeguros();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableTarjetas', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableTarjetas();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tableVehiculos', async (req: Request, res: Response) => {
    const { username } = req.body;
    try{
    const result = await tableVehiculos();
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});

//module.exports = router;
export default router;
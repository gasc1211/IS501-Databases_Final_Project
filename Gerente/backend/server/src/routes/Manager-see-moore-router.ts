import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import * as types from "../types";

const router = express.Router();
dotenv.config();

import { verMasCaracteristicas, caracteristicaInfo, verMasCategorias, categoriasInfo, verMasClientes, clientesInfo, verMasDanios, daniosInfo, verMasEmpleados, empleadosInfo } from "../dbConnectionManagerSeeMoore";
import { verMasEstatus, estatusInfo, verMasExtras, extrasInfo, verMasListaNegra, listaNegraInfo, verMasLocalidades, localidadesInfo} from "../dbConnectionManagerSeeMoore";
import { verMasMarcas, marcasInfo, verMasModelos, modelosInfo, verMasMultas, multasInfo, verMasOrdenes, ordenesInfo, verMasPuestosEmpleados, puestosEmpleadosInfo} from "../dbConnectionManagerSeeMoore";
import { verMasReporteInicial, reporteInicialInfo, verMasSeguros, segurosInfo, verMasTarjetas, tarjetasInfo, verMasVehiculos, vehiculosInfo } from "../dbConnectionManagerSeeMoore";
import { verMasFacturasRI, verMasFacturasRF, facturasRIInfo, facturasRFInfo, } from "../dbConnectionManagerSeeMoore";
import { ordenesChangeState } from "../dbConnectionManagerSeeMoore";


//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasCaracteristicas', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasCaracteristicas(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/caracteristicaInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await caracteristicaInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasCategorias', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasCategorias(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/categoriasInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await categoriasInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasClientes', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasClientes(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/clientesInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await clientesInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:

router.post('/verMasDanios', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasDanios(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/daniosInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await daniosInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:


router.post('/verMasEmpleados', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasEmpleados(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/empleadosInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await empleadosInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasEstatus', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasEstatus(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/estatusInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await estatusInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------Ver mas de:
router.post('/verMasExtras', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasExtras(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/extrasInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await extrasInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasListaNegra', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasListaNegra(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/listaNegraInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await listaNegraInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasLocalidades', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasLocalidades(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/localidadesInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await localidadesInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasMarcas', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasMarcas(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/marcasInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await marcasInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasModelos', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasModelos(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/modelosInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await modelosInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasMultas', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasMultas(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/multasInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await multasInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasOrdenes', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasOrdenes(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/ordenesInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await ordenesInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/ordenesChangeState', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await ordenesChangeState(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasPuestosEmpleados', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasPuestosEmpleados(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/puestosEmpleadosInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await puestosEmpleadosInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasReporteInicial', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasReporteInicial(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/reporteInicialInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await reporteInicialInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasSeguros', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasSeguros(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/segurosInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await segurosInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasTarjetas', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasTarjetas(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/tarjetasInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await tarjetasInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasVehiculos', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasVehiculos(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/vehiculosInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await vehiculosInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
//--------------------------------------------------------------------------------------------------------------
router.post('/verMasFacturasRI', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasFacturasRI(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/verMasFacturasRF', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await verMasFacturasRF(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/facturasRIInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await facturasRIInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});
router.post('/facturasRFInfo', async (req: Request, res: Response) => {
    const { id } = req.body;
    try{
    const result = await facturasRFInfo(id);
    res.json(result);
    } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
    }
});


export default router;
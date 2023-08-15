import express from "express";
import localidadController from "./localidad.controller";

const localidadRouter = {
  getRouter() {
    const router = express.Router();
    router.route("/").get(localidadController.getLocalidades);
    router.route("/").post(localidadController.insertLocalidad);
    return router;
  },
};

export default localidadRouter;
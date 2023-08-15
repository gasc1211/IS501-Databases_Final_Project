import localidadController from "./localidad.controller";
import localidadRouter from "./localidad.router";

export default {
  controller: localidadController,
  router: localidadRouter.getRouter(),
};
import carsController from "./cars.controller";
import carsRouter from "./cars.router";

export default {
  controller: carsController,
  router: carsRouter.getRouter(),
};

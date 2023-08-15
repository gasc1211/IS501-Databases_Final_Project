import extraController from "./extras.controller";
import extrasRouter from "./extras.router";

export default {
  controller: extraController,
  router: extrasRouter.getRouter(),
};
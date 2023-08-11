import genericController from "./generic.controller";
import genericRouter from "./generic.router";

export default {
  controller: genericController,
  router: genericRouter.getRouter(),
};
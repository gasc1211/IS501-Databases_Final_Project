import express from "express";
import genericController from "./generic.controller";

const genericRouter = {
  getRouter() {
    const router = express.Router();
    router.route("/").get(genericController.getAnyTable);
    // TODO: CHECK PETITION TYPE
    router.route("/").get(genericController.getAnyRegister);
    return router;
  },
};

export default genericRouter;
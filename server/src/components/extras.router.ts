import express from "express";
import extraController from "./localidad.controller";

const extrasRouter = {
  getRouter() {
    const router = express.Router();
    router.route("/").get(extraController.getExtras);
    router.route("/").post(extraController.insertExtra);
    return router;
  },
};

export default extrasRouter;
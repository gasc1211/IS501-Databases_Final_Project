import express from "express";
import carsController from "./cars.controller";

const carsRouter = {
  getRouter() {
    const router = express.Router();
    router.route("/").get(carsController.getUsers);
    return router;
  },
};

export default carsRouter;
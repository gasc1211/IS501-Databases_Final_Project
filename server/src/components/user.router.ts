import express from "express";
import userController from "./user.controller";

const userRouter = {
  getRouter() {
    const router = express.Router();
    router.route("/:clientID").get(userController.getUser);
    router.route("/").get(userController.getUsers);
    router.route("/").post(userController.insertUser);
    return router;
  },
};

export default userRouter;

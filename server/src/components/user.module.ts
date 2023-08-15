import userController from "./user.controller";
import userRouter from "./user.router";

export default {
  controller: userController,
  router: userRouter.getRouter(),
};

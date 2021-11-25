import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateuserAvatarController = new UpdateUserAvatarController();

usersRoutes.use(ensureAuthenticate);
usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
  "/avatar",
  uploadAvatar.single("avatar"),
  updateuserAvatarController.handle
);

export { usersRoutes };

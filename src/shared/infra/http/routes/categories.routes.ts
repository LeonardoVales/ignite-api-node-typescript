import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../../../../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../../../../modules/cars/useCases/listCategories/ListCategoriesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  createCategoryController.handle
);

// Jeito antigo, antes de utilisar o tsyring
// categoriesRoutes.post("/", (request, response) => {
//   return createCategoryController().handle(request, response);
// });

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  ensureAuthenticate,
  ensureAdmin,
  importCategoryController.handle
);

export { categoriesRoutes };

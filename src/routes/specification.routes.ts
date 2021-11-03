import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateCategoryUseCase(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationRoutes };

import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCaruseCase: CreateCarUseCase;
let carsRepositoryInMemory: ICarsRepository;

describe("Create car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCaruseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    await createCaruseCase.execute({
      name: "Name car",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ABC-2345",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
  });
});

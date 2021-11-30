import { AppError } from "../../../../shared/errors/AppError";
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
    const car = await createCaruseCase.execute({
      name: "Name car",
      description: "Description car",
      daily_rate: 100,
      license_plate: "YTE-2345",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car if with exists license plate", () => {
    expect(async () => {
      await createCaruseCase.execute({
        name: "Name car 1",
        description: "Description car",
        daily_rate: 100,
        license_plate: "ABC-2342",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });

      await createCaruseCase.execute({
        name: "Name car 2",
        description: "Description car",
        daily_rate: 100,
        license_plate: "ABC-2342",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car if with available true by default", async () => {
    const car = await createCaruseCase.execute({
      name: "Car Available",
      description: "Description car",
      daily_rate: 100,
      license_plate: "YHG-2342",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
});

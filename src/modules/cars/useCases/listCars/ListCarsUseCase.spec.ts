import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListcarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all availabe cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car test 1",
      description: "description test",
      daily_rate: 140,
      license_plate: "TRE-3349",
      fine_amount: 100,
      brand: "test",
      category_id: "2c737b99-4927-41c8-a9a9-cf9fdd8b4980",
    });

    const cars = await listCarsUseCase.execute();

    expect(cars).toEqual([car]);
  });

  it("should be able to list all availabe cars by name", () => {});
});

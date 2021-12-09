import { IListCarsDTO } from "../../dtos/IListCarsDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

class ListCarsUseCase {
  constructor(private repository: ICarsRepository) {}

  async execute({ category_id, brand, name }: IListCarsDTO): Promise<Car[]> {
    const cars = await this.repository.findAvailable({
      category_id,
      brand,
      name,
    });

    return cars;
  }
}

export { ListCarsUseCase };

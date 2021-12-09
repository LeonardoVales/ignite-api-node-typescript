import { ICreateCarDto } from "../dtos/ICreateCarDTO";
import { IListCarsDTO } from "../dtos/IListCarsDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDto): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable({ category_id, brand, name }: IListCarsDTO): Promise<Car[]>;
}

export { ICarsRepository };

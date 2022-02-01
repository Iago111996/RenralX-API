import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class PostgresCategoriesRepository implements ICategoryRepository {
  findByName(name: string): Category {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
  list(): Category[] {
    return null;
  }
}

export { PostgresCategoriesRepository };

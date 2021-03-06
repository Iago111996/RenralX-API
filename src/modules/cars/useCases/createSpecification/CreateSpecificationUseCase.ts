import { ISpecificationRepository } from "../../repositories/ISpacificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpacificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpacificationUseCase };

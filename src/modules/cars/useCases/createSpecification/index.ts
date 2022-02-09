import { SpecificationRepository } from "../../repositories/implementations/SpacificationRepository";
import { CreateSpacificationController } from "./CreateSpecificationController";
import { CreateSpacificationUseCase } from "./CreateSpecificationUseCase";

const specificationReposiory = new SpecificationRepository(); 

const createSpecificationUseCase = new CreateSpacificationUseCase(
  specificationReposiory
);

const createSpecificationController = new CreateSpacificationController(
  createSpecificationUseCase
);

export { createSpecificationController };

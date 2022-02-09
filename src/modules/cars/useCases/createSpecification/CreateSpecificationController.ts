import { Request, Response } from "express";
import { CreateSpacificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpacificationController {
  constructor(private createSpecificationUseCase: CreateSpacificationUseCase) {}
  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createSpecificationUseCase.execute({ name, description });

  return res.status(200).send();
  }
}

export { CreateSpacificationController };

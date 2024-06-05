// src/interfaces/http/UserController.ts
import { Request, Response } from "express";
import { CreateUser } from "../../core/usecases/CreateUser";

export class UserController {
  constructor(private createUser: CreateUser) {}

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email } = req.body;
      const user = await this.createUser.execute(name, email);
      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
}

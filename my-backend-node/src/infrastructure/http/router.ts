import { Router } from "express";
import { UserController } from "../../interfaces/http/UserController";
import { CreateUser } from "../../core/usecases/CreateUser";
import { MockUserRepository } from "../../infrastructure/repositories/MockUserRepository";

const router = Router();

const userRepository = new MockUserRepository();
const createUser = new CreateUser(userRepository);
const userController = new UserController(createUser);

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post('/users', asyncHandler((req: any, res: any) => userController.create(req, res)));

export { router };

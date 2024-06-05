import { Request, Response, Router } from "express";
import { UserController } from "./UserController";
import { CreateUser } from "../../core/usecases/CreateUser";
import { MockUserRepository } from "../../infrastructure/repositories/MockUserRepository";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

const router = Router();

const userRepository = new MockUserRepository();
const createUser = new CreateUser(userRepository);
const userController = new UserController(createUser);

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post('/users', asyncHandler((req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => userController.create(req, res)));

export { router };

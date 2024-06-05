import { Request, Response } from 'express';
import { UserController } from './UserController';
import { CreateUser } from '../../core/usecases/CreateUser';
import { User } from '../../core/domain/entities/User';

// Mocking CreateUser class
jest.mock('../../core/usecases/CreateUser');

describe('UserController', () => {
  let createUser: jest.Mocked<CreateUser>;
  let userController: UserController;
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    // Create an instance of the mocked CreateUser
    createUser = new CreateUser(null as any) as jest.Mocked<CreateUser>;
    createUser.execute = jest.fn();

    userController = new UserController(createUser);

    req = {
      body: { name: 'John Doe', email: 'john.doe@example.com' }
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  it('should create a user and return status 201', async () => {
    const user = new User('1', 'John Doe', 'john.doe@example.com');
    createUser.execute.mockResolvedValue(user);

    await userController.create(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(user);
  });

  it('should return status 400 on error', async () => {
    createUser.execute.mockRejectedValue(new Error('Invalid data'));

    await userController.create(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid data' });
  });

  it('should return status 400 on unexpected error type', async () => {
    createUser.execute.mockRejectedValue({});

    await userController.create(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'An unexpected error occurred' });
  });
});

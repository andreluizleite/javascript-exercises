// src/application/use-cases/CreateUser.ts
import { UserRepository } from "../../core/repositories/UserRepository";
import { User } from '../../core/domain/entities/User';

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string): Promise<User> {
    const user = new User("1", name, email);
    await this.userRepository.save(user);
    return user;
  }
}

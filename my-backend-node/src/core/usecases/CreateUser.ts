import { User } from '../domain/entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string): Promise<User> {
    const id = this.generateId();
    const user = new User(id, name, email);
    await this.userRepository.save(user);
    return user;
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2);
  }
}

// src/infrastructure/database/InMemoryUserRepository.ts
import { UserRepository } from "../../core/repositories/UserRepository";
import { User } from "../../core/domain/entities/User";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}

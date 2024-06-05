// src/domain/repositories/UserRepository.ts

import { User } from '../../core/domain/entities/User';

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
}

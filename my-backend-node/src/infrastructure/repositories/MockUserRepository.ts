import { UserRepository } from '../../core/repositories/UserRepository';
import { User } from '../../core/domain/entities/User';

export class MockUserRepository implements UserRepository {

    private users: User[] = [];

  async findById(id: string): Promise<User | null> {
    console.log("Mock findId");
    const user = this.users.find(user => user.id === id);
    return user ? user : null;
  }
  async save(user: User): Promise<void> {
    console.log(`Mock saving user: ${JSON.stringify(user)}`);  
    this.users.push(user); 
  }
}

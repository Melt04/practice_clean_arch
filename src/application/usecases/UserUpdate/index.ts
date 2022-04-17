
import { User } from 'domain/entities/User';
import { UserRepository } from 'domain/repositories/userRepository';

export class UserUpdateCaseUse {
    private readonly _userRepository: UserRepository
    constructor (userRepository: UserRepository) {
      this._userRepository = userRepository
    }

    async run (user: User): Promise<User> {
      return await this._userRepository.update(user)
    }
}

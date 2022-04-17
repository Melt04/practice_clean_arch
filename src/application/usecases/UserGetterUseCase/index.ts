import { User } from 'domain/entities/User'
import { UserRepository } from 'domain/repositories/userRepository'

export class UserGetterUseCase {
    private readonly _userRepository: UserRepository

    constructor (userRepository: UserRepository) {
      this._userRepository = userRepository
    }

    async run (): Promise<User[]> {
      return await this._userRepository.getAll()
    }
}

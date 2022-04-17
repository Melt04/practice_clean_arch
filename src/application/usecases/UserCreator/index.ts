import { User } from '../../../domain/entities/User'
import { UserRepository } from '../../../domain/repositories/userRepository'
import { ExistUserByUserName } from '../../../domain/services/ExistUserByUserName/index'
import { UserAlredyExistException } from '../../../domain/exception/user/UserAlredyExistExcepetion'
export class UserCreatorUseCase {
  private readonly _userRepository: UserRepository
  private readonly _existUserByUserName: ExistUserByUserName

  constructor (userRespository: UserRepository) {
    this._userRepository = userRespository
    this._existUserByUserName = new ExistUserByUserName(this._userRepository)
  }

  async run (body: User): Promise<User | null> {
    const userExist: boolean = await this._existUserByUserName.run(body.username)
    if (userExist) {
      throw new UserAlredyExistException()
    }
    const userCreated: User = await this._userRepository.save(body)
    return userCreated
  }
}

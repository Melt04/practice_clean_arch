import { InMemoryUserRepository } from '../implementations/inMemory/inMemoryUserReposirory'
import { UserCreatorUseCase } from '../../application/usecases/UserCreator/index'
import { UserGetterUseCase } from '../../application/usecases/UserGetterUseCase/index'

import { User } from '../../domain/entities/User'

(async function () {
  const newUser: User = {
    age: 24,
    id: '1231',
    name: 'Alan',
    username: 'alantest'

  }
  const UserCreater = new UserCreatorUseCase(InMemoryUserRepository.Instance)
  const GetterUser = new UserGetterUseCase(InMemoryUserRepository.Instance)
  await UserCreater.run(newUser)
  const user: User[] = await GetterUser.run()
  console.log(user)
})().then(() => {}).catch(() => {})

// eslint-disable-next-line no-unexpected-multiline

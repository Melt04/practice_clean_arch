import { User } from 'domain/entities/User'
import { UserRepository } from 'domain/repositories/userRepository'

export class InMemoryUserRepository implements UserRepository {
  private readonly userData: User[] = []
  private static Singleton: InMemoryUserRepository
  private constructor () {

  }

  static get Instance (): InMemoryUserRepository {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    return this.Singleton || (this.Singleton = new this())
  }

  async getAll (): Promise<User[]> {
    return this.userData
  }

  async save (user: User): Promise<User> {
    this.userData.push(user)
    return user
  }

  async getById (id: string): Promise<User | null> {
    const userFound: User | undefined = this.userData.find((user) => user.id === id)
    if (userFound === undefined) {
      return null
    }
    return userFound
  }

  async delete (user: User): Promise<void> {
    await this.userData.find((u) => u.id === user.id)
  }

  async getByUserName (username: any): Promise<User | null> {
    const userByName: User | undefined = this.userData.find((user) => user.username === username)
    if (userByName === undefined) {
      return null
    }
    return userByName
  }

  async update (user: User): Promise<User> {
    const indexToUpdate: number |undefined = this.userData.findIndex((u) => u.id === user.id)
    this.userData[indexToUpdate] = user
    return user
  }
}

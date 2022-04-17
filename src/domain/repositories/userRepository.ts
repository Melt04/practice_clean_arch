import { User } from '../entities/User'

export interface UserRepository {
  getAll: () => Promise<User[]>
  save: (user: any) => Promise<User>
  getByUserName: (username: any) => Promise<User | null>
  update: (user: User) => Promise<User>
  delete: (user: User) => Promise<void>
  getById: (id: string) => Promise<User | null>
}

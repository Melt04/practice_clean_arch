export class UserAlredyExistException extends Error {
  constructor () {
    super('User alredy exist')
  }
}

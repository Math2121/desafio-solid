import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const ifUserExistsEmail = this.usersRepository.findByEmail(email);
    if (!ifUserExistsEmail) {
      const newUser = this.usersRepository.create({ name, email });

      return newUser;
    }
    throw new Error("User Already Exists");
  }
}

export { CreateUserUseCase };

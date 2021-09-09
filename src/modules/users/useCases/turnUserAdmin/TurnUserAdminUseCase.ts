import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userEmail = this.usersRepository.findById(user_id);

    const userAlreadyAdmin = this.usersRepository.turnAdmin(userEmail);

    return userAlreadyAdmin;
  }
}

export { TurnUserAdminUseCase };

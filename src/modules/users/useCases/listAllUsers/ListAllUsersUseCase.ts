import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const allUser = this.usersRepository.findById(user_id);
    if (!allUser.admin) {
      throw new Error("User not administrator");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

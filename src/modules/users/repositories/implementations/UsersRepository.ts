import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    const data = Object.assign(user, {
      email,
      name,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);
    return data;
  }

  findById(id: string): User | undefined {
    const userID = this.users.find((item) => item.id === id);
    if (userID) {
      return userID;
    }
    return undefined;
  }

  findByEmail(email: string): User | undefined {
    const userEmail = this.users.find((item) => item.email === email);
    if (userEmail) {
      return userEmail;
    }
    return undefined;
  }

  turnAdmin(receivedUser: User): User {
    const newUserAdmin = Object.assign(receivedUser, {
      admin: true,
      updated_at: new Date(),
    });
    return newUserAdmin;
  }

  list(): User[] {
    const allUsers = this.users;
    return allUsers;
  }
}

export { UsersRepository };

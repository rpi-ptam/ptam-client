import { User } from "../definitions/types/User";
import { BaseStore } from "./BaseStore";

const USER_PATH = "AUTHENTICATED_USER";

export class AuthenticationStore extends BaseStore {

  public storeUser(user: User) {
    localStorage.setItem(this.getFullPath(USER_PATH), JSON.stringify(user));
  }

  public loadUser(): User | null {
    const rawUser = localStorage.getItem(this.getFullPath(USER_PATH));
    return rawUser ? JSON.parse(rawUser) : null;
  }

  public removeUser() {
    localStorage.removeItem(this.getFullPath(USER_PATH));
  }

}
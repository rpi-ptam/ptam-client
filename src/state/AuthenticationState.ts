import {action, observable} from "mobx";
import bind from "bind-decorator";

import { USER_LOGGED_IN } from "../constants/LocalStorageConstants";
import {User} from "../definitions/types/User";

export class AuthenticationState {

  @observable
  public isAuthenticated: boolean;

  @observable
  public user: User | null;

  constructor() {
    this.isAuthenticated = false;
    this.user = null;
  }

  @bind
  @action
  public updateAuthenticationStatus(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
    localStorage.setItem(USER_LOGGED_IN, isAuthenticated ? "true" : "false");
  }

  @bind
  @action
  public updateUser(user: User | null) {
    this.user = user;
  }

}
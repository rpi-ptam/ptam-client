import bind from "bind-decorator";
import { action, computed, observable } from "mobx";

import { User } from "../definitions/types/User";

export class AuthenticationState {

  @observable
  public user: User | null;

  constructor() {
    this.user = null;
  }

  @computed
  public get isAuthenticated(): boolean {
    return this.user !== null;
  }

  @bind
  @action
  public updateUser(user: User | null) {
    this.user = user;
  }

}
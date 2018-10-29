import {action, observable} from "mobx";
import bind from "bind-decorator";

import { ConfigurationService } from "../services/ConfigurationService";
import {USER_LOGGED_IN} from "../constants/LocalStorageConstants";

export class AuthenticationState {

  private readonly configService: ConfigurationService;

  @observable
  public loggedIn: boolean;

  constructor(configService: ConfigurationService) {
    this.configService = configService;
    this.loggedIn = false;
  }

  @bind
  @action
  public redirectToRemoteLogin() {
    window.location.href = this.configService.getServiceUrl() + "/authentication/login";
  }

  @bind
  @action
  public redirectToRemoteLogout() {
    window.location.href = this.configService.getServiceUrl() + "/authentication/logout";
  }

  @bind
  @action
  public updateLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
    localStorage.setItem(USER_LOGGED_IN, loggedIn ? "true" : "false");
  }

}
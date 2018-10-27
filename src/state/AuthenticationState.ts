import {action, observable} from "mobx";
import { ConfigurationService } from "../services/ConfigurationService";
import bind from "bind-decorator";

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

}
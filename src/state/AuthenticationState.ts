import {action} from "mobx";
import bind from "bind-decorator";

import { ConfigurationService } from "../services/ConfigurationService";

/**
 * TODO: REFACTOR TO SERVICE
 */
export class AuthenticationState {

  private readonly configService: ConfigurationService;

  constructor(configService: ConfigurationService) {
    this.configService = configService;
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

}
import bind from "bind-decorator";

import { ConfigurationService } from "../ConfigurationService";
import {StateRegistry} from "../../registries/StateRegistry";
import {USER_INFO, USER_LOGGED_IN} from "../../constants/LocalStorageConstants";
import axios from "axios";

export class AuthenticationService {

  private readonly configService: ConfigurationService;
  private readonly stateRegistry: StateRegistry;

  constructor(configService: ConfigurationService, stateRegistry: StateRegistry) {
    this.configService = configService;
    this.stateRegistry = stateRegistry;
  }

  @bind
  public async hydrateAuthentication(): Promise<void> {
    const { authenticationState } = this.stateRegistry;
    const isAuthenticated = localStorage.getItem(USER_LOGGED_IN) === "true";
    authenticationState.updateAuthenticationStatus(isAuthenticated);
    if (isAuthenticated) {
      const rawUser = localStorage.getItem(USER_INFO);
      if (!rawUser) {
        await this.fetchSelf();
        return;
      }
      authenticationState.updateUser(JSON.parse(rawUser));
    }
  }

  @bind
  public async fetchSelf(): Promise<void> {
    const { authenticationState } = this.stateRegistry;
    const selfEndpointUrl = this.configService.getServiceUrl() + "/users/self/get";
    const response = await axios.get(selfEndpointUrl, { withCredentials: true });
    authenticationState.updateUser(response.data.user);
  }


  @bind
  public redirectToRemoteLogin() {
    window.location.href = this.configService.getServiceUrl() + "/authentication/login";
  }

  @bind
  public redirectToRemoteLogout() {
    window.location.href = this.configService.getServiceUrl() + "/authentication/logout";
  }

}
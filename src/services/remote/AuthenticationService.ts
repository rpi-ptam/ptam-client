import bind from "bind-decorator";

import { RemoteService } from "../generic/RemoteService";
import { User } from "../../definitions/types/User";

export class AuthenticationService extends RemoteService {

  @bind
  public async fetchSelf(): Promise<User> {
    const response = await this.get("users/self/get");
    return response.user;
  }

  @bind
  public redirectToRemoteLogin() {
    window.location.href = this.getBackendUrl() + "/authentication/login";
  }

  @bind
  public redirectToRemoteLogout() {
    /* TODO: Post Request */
    window.location.href = this.getBackendUrl() + "/authentication/logout";
  }

}
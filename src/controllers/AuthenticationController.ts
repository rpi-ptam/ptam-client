import { BaseController } from "./generic/BaseController";

export class AuthenticationController extends BaseController {

  public redirectToLogin(): void {
    const { authenticationService } = this.serviceRegistry;
    authenticationService.redirectToRemoteLogin();
  }

  public redirectToLogout(): void {
    const { authenticationService } = this.serviceRegistry;
    authenticationService.redirectToRemoteLogout();
  }

  public loadFromStorage(): void {
    const { authenticationState } = this.stateRegistry;
    const { authenticationStore } = this.storeRegistry;

    const user = authenticationStore.loadUser();
    authenticationState.updateUser(user);
  }

  public async fetchSelf(): Promise<void> {
    const { authenticationService } = this.serviceRegistry;
    const { authenticationState } = this.stateRegistry;
    const { authenticationStore } = this.storeRegistry;

    try {
      const user = await authenticationService.fetchSelf();
      authenticationState.updateUser(user);
      authenticationStore.storeUser(user);
    }
    catch (error) {
      console.error(error);
    }
  }

}
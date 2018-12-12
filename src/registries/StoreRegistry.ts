import { AuthenticationStore } from "../stores/AuthenticationStore";
import { ApplicationConfiguration } from "../definitions/ApplicationConfiguration";

export class StoreRegistry {

  public readonly authenticationStore: AuthenticationStore;

  constructor(appConfig: ApplicationConfiguration) {
    this.authenticationStore = new AuthenticationStore(appConfig);
  }

}
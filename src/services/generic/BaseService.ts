import { ApplicationConfiguration } from "../../definitions/ApplicationConfiguration";

export class BaseService {

  protected appConfig: ApplicationConfiguration;

  constructor(appConfig: ApplicationConfiguration) {
    this.appConfig = appConfig;
  }

}
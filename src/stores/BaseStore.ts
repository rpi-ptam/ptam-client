import { ApplicationConfiguration } from "../definitions/ApplicationConfiguration";

export class BaseStore {

  protected appConfig: ApplicationConfiguration;

  constructor(appConfig: ApplicationConfiguration) {
    this.appConfig = appConfig;
  }

  protected getFullPath(key: string): string {
    return `${this.appConfig.storage.superKey}/${key}`;
  }

}
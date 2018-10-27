import { ApplicationConfiguration } from "../definitions/ApplicationConfiguration";

import { DevelopmentConfig } from "../config/Development";
import { ProductionConfiguration } from "../config/Production";

export class ConfigurationService {

  public readonly config: ApplicationConfiguration;

  constructor() {
    switch (process.env.NODE_ENV) {
      case "development":
        this.config = DevelopmentConfig;
        break;
      case "production":
        this.config = ProductionConfiguration;
        break;
      default:
        throw Error("unknown application configuration");
    }
  }

  public getServiceUrl(): string {
    const protocol = this.config.service.secure ? "https" : "http";
    const port = this.config.service.port ? `:${this.config.service.port}` : "";
    return `${protocol}://${this.config.service.host}${port}`;
  }

}
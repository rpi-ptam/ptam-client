import { ConfigurationService } from "../ConfigurationService";

export class AppealsService {

  private readonly configService: ConfigurationService;

  constructor(configService: ConfigurationService) {
    this.configService = configService;
    void (this.configService);
  }

}
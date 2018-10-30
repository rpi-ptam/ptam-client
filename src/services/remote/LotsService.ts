import { ConfigurationService } from "../ConfigurationService";

export class LotsService {

  private readonly configService: ConfigurationService;

  constructor(configService: ConfigurationService) {
    this.configService = configService;
    void (this.configService);
  }

}
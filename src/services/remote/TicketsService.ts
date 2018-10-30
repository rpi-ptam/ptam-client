import { ConfigurationService } from "../ConfigurationService";

export class TicketsService {

  private readonly configService: ConfigurationService;

  constructor(configService: ConfigurationService) {
    this.configService = configService;
    void (this.configService);
  }

}
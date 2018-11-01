import axios from "axios";
import bind from "bind-decorator";

import { ConfigurationService } from "../ConfigurationService";

export class VerdictsService {

  private readonly configService: ConfigurationService;

  constructor(configService: ConfigurationService) {
    this.configService = configService;
  }

  @bind
  public async fetchVerdicts(): Promise<Array<string>> {
    const verdictsEndpointUrl = this.configService.getServiceUrl() + "/verdicts/get";
    const response = await axios.get(verdictsEndpointUrl, { withCredentials: true });
    return response.data.verdicts;
  }

}
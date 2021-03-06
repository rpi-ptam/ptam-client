import axios from "axios";
import bind from "bind-decorator";

import { ConfigurationService } from "../ConfigurationService";

export class StatesService {

  private readonly configService: ConfigurationService;

  constructor(configService: ConfigurationService) {
    this.configService = configService;
  }

  @bind
  public async fetchStates(): Promise<Array<string>> {
    const lotsEndpointUrl = this.configService.getServiceUrl() + "/states/get";
    const response = await axios.get(lotsEndpointUrl, { withCredentials: true });
    return response.data.states;
  }

}
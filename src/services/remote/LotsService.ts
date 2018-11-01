import { ConfigurationService } from "../ConfigurationService";
import bind from "bind-decorator";
import axios from "axios";

export class LotsService {

  private readonly configService: ConfigurationService;

  constructor(configService: ConfigurationService) {
    this.configService = configService;
  }

  @bind
  public async fetchLotsEnum(): Promise<Array<string>> {
    const lotsEndpointUrl = this.configService.getServiceUrl() + "/lots/get";
    const response = await axios.get(lotsEndpointUrl, { withCredentials: true });
    return response.data.lots;
  }

}
import {ConfigurationService} from "../ConfigurationService";
import bind from "bind-decorator";
import axios from "axios";

export class ViolationTypesService {

  private configService: ConfigurationService;

  constructor(configService: ConfigurationService) {
    this.configService = configService;
  }

  @bind
  public async fetchViolationTypes(): Promise<Array<string>> {
    const verdictsEndpointUrl = this.configService.getServiceUrl() + "/violation-types/get";
    const response = await axios.get(verdictsEndpointUrl, { withCredentials: true });
    return response.data.violation_types;
  }

}
import { ConfigurationService } from "../ConfigurationService";
import {StateRegistry} from "../../registries/StateRegistry";
import bind from "bind-decorator";
import axios from "axios";

export class AppealsService {

  private readonly configService: ConfigurationService;
  private readonly stateRegistry: StateRegistry;

  constructor(configService: ConfigurationService, stateRegistry: StateRegistry) {
    this.configService = configService;
    this.stateRegistry = stateRegistry;
    void (this.configService);
  }


  @bind
  public async fetchStatistics(): Promise<void> {
    const { viewAppealsState } = this.stateRegistry;

    const statisticsUrlEndpoint = this.configService.getServiceUrl() + "/appeals/statistics/get";
    const response = await axios.get(statisticsUrlEndpoint, { withCredentials: true });
    viewAppealsState.updateStatistics(response.data.statistics);
  }

}
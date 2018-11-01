import { ConfigurationService } from "../ConfigurationService";
import {StateRegistry} from "../../registries/StateRegistry";
import bind from "bind-decorator";
import axios from "axios";
import {VIEW_APPEALS_APPEALS_PER_PAGE} from "../../constants/ViewConstants";

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

  @bind
  public async fetchAppealsBulk(pageNumber: number, decided?: boolean) {
    const { viewAppealsState } = this.stateRegistry;

    const bulkEndpointUrl = this.configService.getServiceUrl() + "/appeals/bulk/get";
    const params = {
      start: pageNumber * VIEW_APPEALS_APPEALS_PER_PAGE,
      count: VIEW_APPEALS_APPEALS_PER_PAGE,
      decided
    };
    const response = await axios.get(bulkEndpointUrl, { withCredentials: true, params });
    viewAppealsState.updateCurrentlyViewedAppeals(response.data.appeals);
  }

}
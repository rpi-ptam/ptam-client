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

  @bind
  public async fetchAppeal(appealId: number) {
    const { decideAppealState } = this.stateRegistry;
    try {
      const getAppealEndpointUrl = this.configService.getServiceUrl() + "/appeals/get";
      const params = { appeal_id: appealId }
      const response = await axios.get(getAppealEndpointUrl, { withCredentials: true, params });
      if (response.data.success) {
        decideAppealState.updateAppealTicketPair(response.data.appeal_ticket_pair);
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  @bind
  public validateFileAppealForm(): void {
    const { fileAppealState } = this.stateRegistry;
    const invalidFields = [];
    if (fileAppealState.justification.length < 1)
      invalidFields.push("justification");
    fileAppealState.updateInvalidFields(invalidFields);
  }


  @bind
  public async submitAppeal(ticketId: number) {
    const { fileAppealState } = this.stateRegistry;

    this.validateFileAppealForm();
    if (fileAppealState.invalidFields.length > 0) return;

    const createAppealUrl = this.configService.getServiceUrl() + "/appeals/create";
    const payload = { ticket_id: ticketId, justification: fileAppealState.justification };

    fileAppealState.updateSubmitting(true);
    try {
      const response = await axios.post(createAppealUrl,  payload, { withCredentials: true });
      if (response.data.success) {
        fileAppealState.updateSubmittedSuccess(true);
      }
    }
    catch (error) {
      console.log(error);
    }
    finally {
      fileAppealState.updateSubmitting(false);
    }
  }

}
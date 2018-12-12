import { RemoteService } from "../generic/RemoteService";

import { AppealStatistics } from "../../definitions/types/AppealStatistics";
import { AppealTicketPair } from "../../definitions/types/AppealTicketPair";

export class AppealsService extends RemoteService {

  public async fetchStatistics(): Promise<AppealStatistics> {
    const response = await this.get("appeals/statistics/get");
    return response.statistics;
  }

  public async fetchAppealsBulk(start: number, count: number, decided?: boolean): Promise<Array<AppealTicketPair>> {
    const params = { start, count, decided };
    const response = await this.get("appeals/bulk/get", { params });
    return response.appeals;
  }

  public async fetchAppeal(appealId: number): Promise<AppealTicketPair> {
    const params = { appeal_id: appealId };
    const response = await this.get("appeals/get", { params });
    return response.appeal_ticket_pair;
  }

  public async createAppeal(payload: any): Promise<void> {
    /* The params will be spread for individual validation */
    await this.post("appeals/create", { params: payload });
  }

}
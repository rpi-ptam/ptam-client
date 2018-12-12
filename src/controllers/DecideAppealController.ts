import { BaseController } from "./generic/BaseController";

export class DecideAppealController extends BaseController {

  public async fetchAppeal(appealId: number): Promise<void> {
    const { appealsService } = this.serviceRegistry;
    const { decideAppealState } = this.stateRegistry;

    try {
      const appeal = await appealsService.fetchAppeal(appealId);
      decideAppealState.updateAppealTicketPair(appeal);
    }
    catch (error) {
      console.error("TODO: Error State");
    }
  }

}
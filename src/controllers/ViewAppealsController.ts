import { BaseController } from "./generic/BaseController";

export class ViewAppealsController extends BaseController {

  public async fetchStatistics(): Promise<void> {

  }

  public async fetchBulk(pageNumber: number): Promise<void> {
    const { appealsService } = this.serviceRegistry;
    const { viewAppealsState } = this.stateRegistry;
    try {
      const appeals = await appealsService.fetchAppealsBulk(pageNumber);
      viewAppealsState.updateCurrentlyViewedAppeals(appeals);
    }
    catch (error) {
      console.error(error);
      /* TODO: Show error to the client */
    }

  }

}
import bind from "bind-decorator";
import {action, computed, observable} from "mobx";
import {AppealStatistics} from "../../definitions/types/AppealStatistics";
import {AppealTicketPair} from "../../definitions/types/AppealTicketPair";
import {VIEW_APPEALS_APPEALS_PER_PAGE} from "../../constants/ViewConstants";

export class ViewAppealsState {

  @observable
  public statistics: AppealStatistics | null;

  @observable
  public currentlyViewedAppeals: Array<AppealTicketPair>;

  @observable
  public currentAppealsPageIndex: number;

  constructor() {
    this.statistics = null;
    this.currentlyViewedAppeals = [];
    this.currentAppealsPageIndex = 0;
  }

  @computed
  public get totalPageCount(): number {
    const totalAppealsSafe = this.statistics ? this.statistics.total_appeals : 0;
    return Math.ceil(totalAppealsSafe / VIEW_APPEALS_APPEALS_PER_PAGE);
  }

  @bind
  @action
  public updateStatistics(statistics: AppealStatistics) {
    this.statistics = statistics;
  }

  @bind
  @action
  public updateCurrentlyViewedAppeals(appeals: Array<AppealTicketPair>) {
    this.currentlyViewedAppeals = appeals;
  }

}
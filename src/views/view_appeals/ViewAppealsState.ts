import bind from "bind-decorator";
import {action, observable} from "mobx";
import {AppealStatistics} from "../../definitions/types/AppealStatistics";

export class ViewAppealsState {

  @observable
  public statistics: AppealStatistics | null;

  constructor() {
    this.statistics = null;
  }

  @bind
  @action
  public updateStatistics(statistics: AppealStatistics) {
    this.statistics = statistics;
  }

}
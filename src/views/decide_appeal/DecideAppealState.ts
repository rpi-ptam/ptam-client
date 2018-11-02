import {action, observable} from "mobx";
import bind from "bind-decorator";

import {AppealTicketPair} from "../../definitions/types/AppealTicketPair";

export class DecideAppealState {

  @observable
  public appealTicketPair: AppealTicketPair | undefined;

  @bind
  @action
  public updateAppealTicketPair(appealTicketPair: AppealTicketPair) {
    this.appealTicketPair = appealTicketPair;
  }

}
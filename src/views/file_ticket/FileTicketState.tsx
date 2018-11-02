import {action, observable} from "mobx";
import moment from "moment";
import React from "react";
import {CacheRegistry} from "../../registries/CacheRegistry";
import bind from "bind-decorator";

export class FileTicketState {

  @observable
  public ticketIssueDate: moment.Moment;

  @observable
  public readonly statesOptions: Array<JSX.Element>;

  @observable
  public readonly lotsOptions: Array<JSX.Element>;

  @observable
  public readonly violationOptions: Array<JSX.Element>;

  constructor() {
    this.ticketIssueDate = moment();
    this.statesOptions = [<option key="default" value="default">State</option>];
    this.lotsOptions = [<option key="default" value="default">Lot</option>];
    this.violationOptions = [<option key="default" value="default">Violation</option>];
  }

  @bind
  @action
  public updateTicketIssueDate(ticketIssueDate: moment.Moment) {
    this.ticketIssueDate = ticketIssueDate;
  }

  @bind
  @action
  public async fillCaches(cacheRegistry: CacheRegistry): Promise<void> {
    await this.fillStateOptions(cacheRegistry);
    await this.fillLotOptions(cacheRegistry);
    await this.fillViolationOptions(cacheRegistry);
  }

  @bind
  @action
  private async fillStateOptions(cacheRegistry: CacheRegistry) {
    const { statesCache } = cacheRegistry;
    const statesValues = await statesCache.values();
    statesValues.forEach(state => {
      this.statesOptions.push(<option key={state} value={state}>{state}</option>);
    });
  }

  @bind
  @action
  private async fillLotOptions(cacheRegistry: CacheRegistry): Promise<void> {
    const { lotsCache } = cacheRegistry;
    const lotsValues = await lotsCache.values();
    lotsValues.forEach(lot => {
      this.lotsOptions.push(<option key={lot} value={lot}>{lot}</option>)
    });
  }

  @bind
  @action
  private async fillViolationOptions(cacheRegistry: CacheRegistry): Promise<void> {
    const { violationTypesCache } = cacheRegistry;
    const violationValues = await violationTypesCache.values();
    violationValues.forEach(violation => {
      this.violationOptions.push(<option key={violation} value={violation}>{violation}</option>)
    });
  }

}
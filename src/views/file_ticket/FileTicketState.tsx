import {action, observable} from "mobx";
import moment from "moment";
import React from "react";
import {CacheRegistry} from "../../registries/CacheRegistry";
import bind from "bind-decorator";
import {TICKET_PAYLOAD} from "../../constants/PayloadDefinitions";

export class FileTicketState {

  @observable
  public invalidFields: Array<string>;

  @observable
  public isSubmitting: boolean;

  @observable
  public ticketIssueDate: moment.Moment;

  @observable
  public readonly statesOptions: Array<JSX.Element>;

  @observable
  public readonly lotsOptions: Array<JSX.Element>;

  @observable
  public readonly violationOptions: Array<JSX.Element>;

  public readonly ticket: any;

  constructor() {
    this.ticketIssueDate = moment();
    this.ticket = {};
    this.isSubmitting = false;
    this.invalidFields = [];

    this.statesOptions = [<option key="default" value="default">State</option>];
    this.lotsOptions = [<option key="default" value="default">Lot</option>];
    this.violationOptions = [<option key="default" value="default">Violation</option>];
  }

  private validateFields() {
    this.invalidFields = [];
    for(let i=0; i< TICKET_PAYLOAD.length; i++) {
      if (!this.ticket.hasOwnProperty(TICKET_PAYLOAD[i])) {
        this.invalidFields.push(TICKET_PAYLOAD[i]);
      }
    }
  }

  @bind
  @action
  private updateSubmitting(submitting: boolean): void {
    this.isSubmitting = submitting;
  }

  @bind
  @action
  public async submit() {
    console.log("validating fields");
    this.validateFields();
    console.log("validated fields", this.invalidFields.join(", "));
    if (this.invalidFields.length > 0) return;
    this.updateSubmitting(true);
    // TODO: submit
    this.updateSubmitting(false);
  }

  @bind
  @action
  public updateTicketField(field: string, value: string | number): void {
    this.ticket[field] = value;
  }

  @bind
  public getInputClass(field: string): string {
    return this.invalidFields.indexOf(field) >= 0 ? "input is-danger" : "input";
  }

  @bind
  public getSelectClass(field: string): string {
    return this.invalidFields.indexOf(field) >= 0 ? "select is-danger" : "select";
  }

  @bind
  public getFieldValue(field: string): string | number {
    return this.ticket[field];
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
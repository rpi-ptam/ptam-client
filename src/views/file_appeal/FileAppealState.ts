import bind from "bind-decorator";
import { action, computed, observable } from "mobx";

import { MAXIMUM_APPEAL_JUSTIFICATION_LENGTH } from "../../constants/ViewConstants";

export class FileAppealState {

  @observable
  public justification: string;

  @observable
  public invalidFields: Array<string>;

  @observable
  public submitting: boolean;

  @observable
  public submittedSuccess: boolean;

  constructor() {
    this.justification = "";
    this.invalidFields = [];
    this.submitting = false;
    this.submittedSuccess = false;
  }

  @bind
  @action
  public updateJustification(justification: string): void {
    if (justification.length > MAXIMUM_APPEAL_JUSTIFICATION_LENGTH)
      return;
    this.justification = justification;
  }

  @bind
  @action
  public updateSubmitting(submitting: boolean): void {
    this.submitting = submitting;
  }

  @bind
  @action
  public updateSubmittedSuccess(submittedSuccess: boolean): void {
    this.submittedSuccess = submittedSuccess;
  }

  @bind
  @action
  public updateInvalidFields(invalidFields: Array<string>): void {
    this.invalidFields = invalidFields;
  }

  @computed
  public get justificationLength(): number {
    return this.justification.length;
  }

}
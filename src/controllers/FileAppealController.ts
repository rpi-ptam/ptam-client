import bind from "bind-decorator";
import { BaseController } from "./generic/BaseController";

export class FileAppealController extends BaseController {

  @bind
  public validateFileAppealForm(): void {
    const { fileAppealState } = this.stateRegistry;

    const invalidFields = [];

    if (fileAppealState.justification.length < 1) invalidFields.push("justification");
    fileAppealState.updateInvalidFields(invalidFields);
  }

  @bind
  public async submitAppeal(ticketId: number) {
    const { fileAppealState } = this.stateRegistry;
    const { appealsService } = this.serviceRegistry;

    this.validateFileAppealForm();
    if (fileAppealState.invalidFields.length > 0) return;

    fileAppealState.updateSubmitting(true);

    try {
      const payload = { ticket_id: ticketId, justification: fileAppealState.justification };
      await appealsService.createAppeal(payload);
      fileAppealState.updateSubmittedSuccess(true);
    }
    catch (error) {
      // TODO Error State
      console.log(error);
    }
    finally {
      fileAppealState.updateSubmitting(false);
    }

  }

}
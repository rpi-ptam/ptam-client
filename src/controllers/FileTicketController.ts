import { BaseController } from "./generic/BaseController";

export class FileTicketController extends BaseController {

  public async fillFormCaches(): Promise<void> {
    const { fileTicketState } = this.stateRegistry;
    const { } = this.cacheRegistry;
  }

}
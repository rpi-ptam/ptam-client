import axios from "axios";
import { ConfigurationService } from "../ConfigurationService";
import { StateRegistry } from "../../registries/StateRegistry";
import {TICKET_PAYLOAD} from "../../constants/PayloadDefinitions";

export class TicketsService {

  private readonly configService: ConfigurationService;
  private readonly stateRegistry: StateRegistry;

  constructor(configService: ConfigurationService, stateRegistry: StateRegistry) {
    this.configService = configService;
    this.stateRegistry = stateRegistry;
  }

  public async submitCreateTicket(payload: any): Promise<void> {
    const { fileTicketState } = this.stateRegistry;

    this.validateFileTicketFields();
    if (fileTicketState.invalidFields.length > 0) return;

    payload["issued_at"] = fileTicketState.ticketIssueDate.format();
    fileTicketState.updateSubmitting(true);

    try {
      const createTicketUrl = this.configService.getServiceUrl() + "/tickets/create";
      const response = await axios.post(createTicketUrl, payload, { withCredentials: true });
      fileTicketState.updateSubmittedTicketId(response.data.ticket_id);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      fileTicketState.updateSubmitting(false);
    }

  }

  public validateFileTicketFields() {
    const { fileTicketState } = this.stateRegistry;
    const invalidFields = [];
    for(let i=0; i< TICKET_PAYLOAD.length; i++) {
      if (!fileTicketState.ticket.hasOwnProperty(TICKET_PAYLOAD[i])) {
        invalidFields.push(TICKET_PAYLOAD[i]);
      }
    }
    fileTicketState.updateInvalidFields(invalidFields);
  }

}
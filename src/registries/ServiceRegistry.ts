import { AppealsService } from "../services/remote/AppealsService";
import { ConfigurationService } from "../services/ConfigurationService";
import { AuthenticationService } from "../services/remote/AuthenticationService";
import { LotsService } from "../services/remote/LotsService";
import { StatesService } from "../services/remote/StatesService";
import { UsersService } from "../services/remote/UsersService";
import { TicketsService } from "../services/remote/TicketsService";
import {StateRegistry} from "./StateRegistry";

export class ServiceRegistry {

  private readonly stateRegistry: StateRegistry;
  public readonly configService: ConfigurationService;

  public readonly appealsService: AppealsService;
  public readonly authenticationService: AuthenticationService;
  public readonly lotsService: LotsService;
  public readonly statesService: StatesService;
  public readonly ticketsService: TicketsService;
  public readonly usersService: UsersService;

  constructor(stateRegistry: StateRegistry) {
    this.stateRegistry = stateRegistry;
    this.configService = new ConfigurationService();

    this.appealsService = new AppealsService(this.configService, this.stateRegistry);
    this.authenticationService = new AuthenticationService(this.configService, this.stateRegistry);
    this.lotsService = new LotsService(this.configService);
    this.statesService = new StatesService(this.configService);
    this.ticketsService = new TicketsService(this.configService);
    this.usersService = new UsersService(this.configService, this.stateRegistry);
  }

}
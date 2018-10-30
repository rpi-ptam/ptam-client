import { ConfigurationService } from "../ConfigurationService";

import {StateRegistry} from "../../registries/StateRegistry";

export class UsersService {

  private readonly configService: ConfigurationService;
  private readonly stateRegistry: StateRegistry;

  constructor(configService: ConfigurationService, stateRegistry: StateRegistry) {
    this.configService = configService;
    this.stateRegistry = stateRegistry;
    void (this.configService);
    void (this.stateRegistry);
  }

}
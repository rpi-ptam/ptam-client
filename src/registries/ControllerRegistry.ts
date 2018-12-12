import { StateRegistry } from "./StateRegistry";
import { ServiceRegistry } from "./ServiceRegistry";
import { ViewAppealsController } from "../controllers/ViewAppealsController";
import { DecideAppealController } from "../controllers/DecideAppealController";
import { FileAppealController } from "../controllers/FileAppealController";
import { FileTicketController } from "../controllers/FileTicketController";
import { AuthenticationController } from "../controllers/AuthenticationController";
import { StudentStatusController } from "../controllers/StudentStatusController";
import { UserManagementController } from "../controllers/UserManagementController";
import { StoreRegistry } from "./StoreRegistry";
import { CacheRegistry } from "./CacheRegistry";

export class ControllerRegistry {

  public readonly authenticationController: AuthenticationController;
  public readonly decideAppealController: DecideAppealController;
  public readonly fileAppealController: FileAppealController;
  public readonly fileTicketController: FileTicketController;
  public readonly studentStatusController: StudentStatusController;
  public readonly userManagementController: UserManagementController;
  public readonly viewAppealsController: ViewAppealsController;

  constructor(stateRegistry: StateRegistry, serviceRegistry: ServiceRegistry, storeRegistry: StoreRegistry, cacheRegistry: CacheRegistry) {
    this.authenticationController = new AuthenticationController(stateRegistry, serviceRegistry, storeRegistry, cacheRegistry);
    this.decideAppealController = new DecideAppealController(stateRegistry, serviceRegistry, storeRegistry, cacheRegistry);
    this.fileAppealController = new FileAppealController(stateRegistry, serviceRegistry, storeRegistry, cacheRegistry);
    this.fileTicketController = new FileTicketController(stateRegistry, serviceRegistry, storeRegistry, cacheRegistry);
    this.studentStatusController = new StudentStatusController(stateRegistry, serviceRegistry, storeRegistry, cacheRegistry);
    this.userManagementController = new UserManagementController(stateRegistry, serviceRegistry, storeRegistry, cacheRegistry);
    this.viewAppealsController = new ViewAppealsController(stateRegistry, serviceRegistry, storeRegistry, cacheRegistry);
  }


}
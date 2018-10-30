import { DecideAppealState } from "../views/decide_appeal/DecideAppealState";
import { FileAppealState } from "../views/file_appeal/FileAppealState";
import { FileTicketState } from "../views/file_ticket/FileTicketState";
import { StudentStatusState } from "../views/student_status/StudentStatusState";
import { UserManagementState } from "../views/user_management/UserManagementState";
import { ViewAppealsState } from "../views/view_appeals/ViewAppealsState";
import { AuthenticationState } from "../state/AuthenticationState";

export class StateRegistry {

  public readonly decideAppealState: DecideAppealState;
  public readonly fileAppealState: FileAppealState;
  public readonly fileTicketState: FileTicketState;
  public readonly studentStatusState: StudentStatusState;
  public readonly userManagementState: UserManagementState;
  public readonly viewAppealsState: ViewAppealsState;

  public readonly authenticationState: AuthenticationState;

  constructor() {
    this.decideAppealState = new DecideAppealState();
    this.fileAppealState = new FileAppealState();
    this.fileTicketState = new FileTicketState();
    this.studentStatusState = new StudentStatusState();
    this.userManagementState = new UserManagementState();
    this.viewAppealsState = new ViewAppealsState();
    this.authenticationState = new AuthenticationState();
  }

}
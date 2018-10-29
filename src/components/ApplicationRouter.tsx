import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { DecideAppealPage } from "../views/decide_appeal/DecideAppealPage";
import { FileAppealPage } from "../views/file_appeal/FileAppealPage";
import { FileTicketPage } from "../views/file_ticket/FileTicketPage";
import { StudentStatusPage } from "../views/student_status/StudentStatusPage";
import { UserManagementPage } from "../views/user_management/UserManagementPage";
import { ViewAppealsPage } from "../views/view_appeals/ViewAppealsPage";
import { LoginPage } from "../views/login/LoginPage";
import {HomePage} from "../views/static/HomePage";
import {AuthenticatedRoute} from "./router/AuthenticatedRoute";
import {StateRegistry} from "../registries/StateRegistry";
import {LogoutPage} from "../views/logout/LogoutPage";

type RouterProps = {
  stateRegistry: StateRegistry
}

export class ApplicationRouter extends React.Component<RouterProps> {

  render() {
    const { authenticationState } = this.props.stateRegistry;
    const { loggedIn } = authenticationState;
    return (
      <BrowserRouter>
        <div>
          <AuthenticatedRoute isAuthenticated={loggedIn} path="/decide-appeal" component={DecideAppealPage}/>
          <AuthenticatedRoute isAuthenticated={loggedIn} path="/file-appeal" component={FileAppealPage}/>
          <AuthenticatedRoute isAuthenticated={loggedIn} path="/file-ticket" component={FileTicketPage}/>
          <AuthenticatedRoute isAuthenticated={loggedIn} path="/student-status" component={StudentStatusPage}/>
          <AuthenticatedRoute isAuthenticated={loggedIn} path="/user-management" component={UserManagementPage}/>
          <AuthenticatedRoute isAuthenticated={loggedIn} path="/view-appeals" component={ViewAppealsPage}/>
          <Route path="/login/:status?" component={LoginPage}/>
          <Route path="/logout/:status?" component={LogoutPage}/>
          <Route exact path="/" component={HomePage}/>
        </div>
      </BrowserRouter>
    );
  }

}
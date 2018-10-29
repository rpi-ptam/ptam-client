import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { AuthenticatedRoute } from "./router/AuthenticatedRoute";

import { DecideAppealPage } from "../views/decide_appeal/DecideAppealPage";
import { FileAppealPage } from "../views/file_appeal/FileAppealPage";
import { FileTicketPage } from "../views/file_ticket/FileTicketPage";
import { StudentStatusPage } from "../views/student_status/StudentStatusPage";
import { UserManagementPage } from "../views/user_management/UserManagementPage";
import { ViewAppealsPage } from "../views/view_appeals/ViewAppealsPage";
import { LogoutPage } from "../views/logout/LogoutPage";
import { LoginPage } from "../views/login/LoginPage";
import { HomePage } from "../views/static/HomePage";

import { USER_LOGGED_IN } from "../constants/LocalStorageConstants";

type ApplicationRouterState = {
  isAuthenticated: boolean
}

export class ApplicationRouter extends React.Component<{},ApplicationRouterState> {

  constructor(props: any) {
    super(props);
    this.state = {
      isAuthenticated: false
    }
  }

  componentWillMount() {
    const isAuthenticated = localStorage.getItem(USER_LOGGED_IN) === "true";
    this.setState({ isAuthenticated: isAuthenticated });
  }

  render() {
    const isAuthenticated = this.state.isAuthenticated;
    return (
      <BrowserRouter>
        <div>
          <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/decide-appeal" component={DecideAppealPage}/>
          <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/file-appeal" component={FileAppealPage}/>
          <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/file-ticket" component={FileTicketPage}/>
          <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/student-status" component={StudentStatusPage}/>
          <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/user-management" component={UserManagementPage}/>
          <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/view-appeals" component={ViewAppealsPage}/>
          <Route path="/login/:status?" component={LoginPage}/>
          <Route path="/logout/:status?" component={LogoutPage}/>
          <Route exact path="/" component={HomePage}/>
        </div>
      </BrowserRouter>
    );
  }

}
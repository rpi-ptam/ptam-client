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

import { NavigationBar } from "./navigation/NavigationBar";
import { StatefulComponentProps } from "../definitions/PageProps";

export class ApplicationRouter extends React.Component<StatefulComponentProps> {

  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    const {authenticationController} = this.props.pageDependencies.controllerRegistry;
    authenticationController.loadFromStorage();
  }

  render() {
    const {authenticationState} = this.props.pageDependencies.stateRegistry;
    const {isAuthenticated} = authenticationState;
    return (
      <BrowserRouter>
        <div>
          <NavigationBar {...this.props}/>
          <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/decide-appeal/:appealId" component={DecideAppealPage}/>
          <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/file-appeal/:ticketId" component={FileAppealPage}/>
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
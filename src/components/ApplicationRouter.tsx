import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { DecideAppealPage } from "../views/decide_appeal/DecideAppealPage";
import { FileAppealPage } from "../views/file_appeal/FileAppealPage";
import { FileTicketPage } from "../views/file_ticket/FileTicketPage";
import { StudentStatusPage } from "../views/student_status/StudentStatusPage";
import { UserManagementPage } from "../views/user_management/UserManagementPage";
import { ViewAppealsPage } from "../views/view_appeals/ViewAppealsPage";
import { LoginPage } from "../views/login/LoginPage";

export class ApplicationRouter extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/decide-appeal" component={DecideAppealPage}/>
          <Route path="/file-appeal" component={FileAppealPage}/>
          <Route path="/file-ticket" component={FileTicketPage}/>
          <Route path="/student-status" component={StudentStatusPage}/>
          <Route path="/user-management" component={UserManagementPage}/>
          <Route path="/view-appeals" component={ViewAppealsPage}/>
          <Route path="/login" component={LoginPage}/>
        </div>
      </BrowserRouter>
    );
  }

}
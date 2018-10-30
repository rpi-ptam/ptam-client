import React from "react";
import { observer } from "mobx-react";

import { StatefulComponentProps } from "../../definitions/PageProps";
import { Link } from "react-router-dom";
import {
  ADMINISTRATOR,
  JUDICIAL_BOARD_CHAIR,
  JUDICIAL_BOARD_MEMBER,
  PARKING_OFFICE_OFFICIAL,
  STUDENT
} from "../../constants/Roles";

/**
 * Universal Navigation Bar
 * @author Joshua Berman <bermaj@rpi.edu>
 */
@observer
export class NavigationBar extends React.Component<StatefulComponentProps> {

  constructor(props: StatefulComponentProps) {
    super(props);
  }

  private getNavigationContent() {
    const { authenticationState } = this.props.stateRegistry;
    const { user } = authenticationState;
    switch (user ? user.role : "") {
      case STUDENT:
        return (
          <div className="navigation-content">
            <Link to="/student-status">My Appeals</Link>
            <Link to="/file-ticket">File Appeal</Link>
            <Link to="logout">Sign Out</Link>
          </div>
        );
      case JUDICIAL_BOARD_CHAIR:
        return (
          <div className="navigation-content">
            <Link to="/view-appeals">View Appeals</Link>
            <Link to="/user-management">User Management</Link>
            <Link to="logout">Sign Out</Link>
          </div>
        );
      case JUDICIAL_BOARD_MEMBER:
      case PARKING_OFFICE_OFFICIAL:
        return (
          <div className="navigation-content">
            <Link to="/view-appeals">View Appeals</Link>
            <Link to="logout">Sign Out</Link>
          </div>
        );
      case ADMINISTRATOR:
        return (
          <div className="navigation-content">
            <Link to="/user-management">User Management</Link>
            <Link to="logout">Sign Out</Link>
          </div>
        );
      default:
        return (
          <div className="navigation-content">
            <Link to="logout">Sign Out</Link>
          </div>
        );
    }
  }

  render() {
    const { authenticationState } = this.props.stateRegistry;
    const { isAuthenticated } = authenticationState;
    const unauthenticatedNavigationContent = (
      <div className="navigation-content">
        <Link to={"/login"}>Sign In</Link>
      </div>
    )
    return (
      <div className="navigation-bar-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img className="logo" src="assets/images/logo.png"/>
          </Link>
        </div>
        {isAuthenticated ? this.getNavigationContent() : unauthenticatedNavigationContent}
      </div>
    )
  }

}
import React from "react";
import { observer } from "mobx-react";

import { StatefulComponentProps } from "../../definitions/PageProps";
import {Link} from "react-router-dom";

/**
 * Universal Navigation Bar
 * @author Joshua Berman <bermaj@rpi.edu>
 */
@observer
export class NavigationBar extends React.Component<StatefulComponentProps> {

  constructor(props: StatefulComponentProps) {
    super(props);
  }

  render() {
    const loginLink = <Link to={"/login"}>Sign In</Link>;
    const logoutLink = <Link to={"/logout"}>Sign Out</Link>;
    return (
      <div className="navigation-bar-wrapper">
        <div className="logo-wrapper">
          <img className="logo" src="assets/images/logo.png"/>
        </div>
        <div className="navigation-content">
          <p>{this.props.stateRegistry.authenticationState.isAuthenticated ? logoutLink : loginLink}</p>
        </div>
      </div>
    )
  }

}
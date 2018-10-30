import React from "react";
import { observer } from "mobx-react";

import { StatefulComponentProps } from "../../definitions/PageProps";

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
    return (
      <div className="navigation-bar-wrapper">
        <div className="logo-wrapper">
          <img className="logo" src="assets/images/logo.png"/>
        </div>
        <div className="navigation-content">
          <p>{this.props.stateRegistry.authenticationState.user && this.props.stateRegistry.authenticationState.user.first_name}</p>
          <p>{this.props.stateRegistry.authenticationState.isAuthenticated ? "Sign Out" : "Sign In"}</p>
        </div>
      </div>
    )
  }

}
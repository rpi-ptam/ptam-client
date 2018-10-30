import React from "react";
import {inject, observer} from "mobx-react";

import {LoginPageProps} from "../../definitions/PageProps";
import {Redirect} from "react-router";

@inject("stateRegistry", "serviceRegistry")
@observer
export class LogoutPage extends React.Component<LoginPageProps> {

  constructor(props: LoginPageProps) {
    super(props);
  }

  componentDidMount() {
    const { authenticationState } = this.props.stateRegistry;
    const { authenticationService } = this.props.serviceRegistry;
    if (this.props.match.params.status === "success") {
      authenticationState.updateAuthenticationStatus(false);
      authenticationState.updateUser(null);
      return;
    }
    authenticationService.redirectToRemoteLogout();
  }

  render() {
    const { authenticationState } = this.props.stateRegistry;
    return (
      authenticationState.isAuthenticated ? <Redirect to="/"/> : <p>You shouldn't see this</p>
    );
  }

}

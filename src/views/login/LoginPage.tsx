import React from "react";
import {inject, observer} from "mobx-react";

import {LoginPageProps} from "../../definitions/PageProps";
import {Redirect} from "react-router";

@inject("stateRegistry", "serviceRegistry")
@observer
export class LoginPage extends React.Component<LoginPageProps> {

  constructor(props: LoginPageProps) {
    super(props);
  }

  async componentDidMount() {
    const { authenticationState } = this.props.stateRegistry;
    const { authenticationService } = this.props.serviceRegistry;
    if (this.props.match.params.status === "success") {
      authenticationState.updateAuthenticationStatus(true);
      await authenticationService.fetchSelf();
      return;
    }
    authenticationService.redirectToRemoteLogin();
  }

  render() {
    const { authenticationState } = this.props.stateRegistry;
    return (
      authenticationState.isAuthenticated ? <Redirect to={"/student-status"}/> : <p>You shouldn't see this</p>
    );
  }

}

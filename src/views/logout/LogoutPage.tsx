import React from "react";
import {inject, observer} from "mobx-react";

import {LoginPageProps} from "../../definitions/PageProps";
import {Redirect} from "react-router";

@inject("stateRegistry")
@observer
export class LogoutPage extends React.Component<LoginPageProps> {

  constructor(props: LoginPageProps) {
    super(props);
  }

  componentDidMount() {
    const { authenticationState } = this.props.stateRegistry;
    if (this.props.match.params.status === "success") {
      authenticationState.updateLoggedIn(false);
      return;
    }
    else {
      authenticationState.redirectToRemoteLogout();
    }
  }

  render() {
    const { authenticationState } = this.props.stateRegistry;
    return (
      !authenticationState.loggedIn ? <Redirect to="/"/> : <p>You shouldn't see this</p>
    );
  }

}

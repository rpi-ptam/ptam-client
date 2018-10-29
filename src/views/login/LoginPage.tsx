import React from "react";
import {inject, observer} from "mobx-react";

import {LoginPageProps} from "../../definitions/PageProps";
import {Redirect} from "react-router";

@inject("stateRegistry")
@observer
export class LoginPage extends React.Component<LoginPageProps> {

  constructor(props: LoginPageProps) {
    super(props);
  }

  componentDidMount() {
    const { authenticationState } = this.props.stateRegistry;
    console.log(this.props);
    if (this.props.match.params.status === "success") {
      authenticationState.updateLoggedIn(true);
      return;
    }
    else {
      authenticationState.redirectToRemoteLogin();
    }
  }

  render() {
    const { authenticationState } = this.props.stateRegistry;
    return (
      authenticationState.loggedIn ? <Redirect to={"/student-status"}/> : <p>You shouldn't see this</p>
    );
  }

}
import React from "react";
import {inject, observer} from "mobx-react";

import {LoginPageProps} from "../../definitions/PageProps";
import {Redirect} from "react-router";
import {USER_LOGGED_IN} from "../../constants/LocalStorageConstants";

@inject("stateRegistry")
@observer
export class LogoutPage extends React.Component<LoginPageProps> {

  constructor(props: LoginPageProps) {
    super(props);
  }

  componentDidMount() {
    if (this.props.match.params.status === "success") {
      localStorage.setItem(USER_LOGGED_IN, "false");
      return;
    }
    const { authenticationState } = this.props.stateRegistry;
    authenticationState.redirectToRemoteLogout();
  }

  render() {
    const loggedOutSuccessfully = this.props.match.params.status === "success";
    return (
      loggedOutSuccessfully ? <Redirect to="/"/> : <p>You shouldn't see this</p>
    );
  }

}

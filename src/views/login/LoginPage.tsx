import React from "react";
import { Redirect } from "react-router";
import { inject, observer } from "mobx-react";

import { LoginPageProps } from "../../definitions/PageProps";

@inject("pageDependencies")
@observer
export class LoginPage extends React.Component<LoginPageProps> {

  constructor(props: LoginPageProps) {
    super(props);
  }

  async componentDidMount() {
    const {authenticationController} = this.props.pageDependencies.controllerRegistry;
    if (this.props.match.params.status === "success") {
      await authenticationController.fetchSelf();
      return;
    }
    authenticationController.redirectToLogin();
  }

  render() {
    const {authenticationState} = this.props.pageDependencies.stateRegistry;
    return (
      authenticationState.isAuthenticated ? <Redirect to={"/"}/> : <p>You shouldn't see this</p>
    );
  }

}

import React from "react";
import { inject, observer } from "mobx-react";

import { PageProps } from "../../definitions/PageProps";

@inject("stateRegistry")
@observer
export class LoginPage extends React.Component<PageProps> {

  constructor(props: PageProps) {
    super(props);
  }

  componentDidMount() {
    const { authenticationState } = this.props.stateRegistry;
    authenticationState.redirectToRemoteLogin();
  }

  render() {
    return (
      <div>File Ticket</div>
    )
  }

}

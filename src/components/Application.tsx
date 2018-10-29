"use strict";

import React from "react";
import {StateRegistry} from "../registries/StateRegistry";
import {Provider} from "mobx-react";
import {ApplicationRouter} from "./ApplicationRouter";
import {ConfigurationService} from "../services/ConfigurationService";
import {USER_LOGGED_IN} from "../constants/LocalStorageConstants";

export class Application extends React.Component {

  private readonly stateRegistry: StateRegistry;
  private readonly configService: ConfigurationService;

  constructor(props: any) {
    super(props);
    this.configService = new ConfigurationService();
    this.stateRegistry = new StateRegistry(this.configService);
  }

  componentWillMount() {
    const isAuthenticated = localStorage.getItem(USER_LOGGED_IN) === "true";
    this.stateRegistry.authenticationState.updateLoggedIn(isAuthenticated);
  }

  render() {
    return (
      <Provider stateRegistry={this.stateRegistry}>
        <ApplicationRouter stateRegistry={this.stateRegistry}/>
      </Provider>
    );
  }

}
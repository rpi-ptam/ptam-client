"use strict";

import React from "react";
import {StateRegistry} from "../registries/StateRegistry";
import {Provider} from "mobx-react";
import {ApplicationRouter} from "./ApplicationRouter";
import {ConfigurationService} from "../services/ConfigurationService";

export class Application extends React.Component {

  private readonly stateRegistry: StateRegistry;
  private readonly configService: ConfigurationService;

  constructor(props: any) {
    super(props);
    this.configService = new ConfigurationService();
    this.stateRegistry = new StateRegistry(this.configService);
  }

  render() {
    return (
      <Provider stateRegistry={this.stateRegistry}>
        <ApplicationRouter/>
      </Provider>
    );
  }

}
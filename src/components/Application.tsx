"use strict";

import React from "react";
import {StateRegistry} from "../registries/StateRegistry";
import {Provider} from "mobx-react";
import {ApplicationRouter} from "./ApplicationRouter";
import {ServiceRegistry} from "../registries/ServiceRegistry";

export class Application extends React.Component {

  private readonly stateRegistry: StateRegistry;
  private readonly serviceRegistry: ServiceRegistry;

  constructor(props: any) {
    super(props);
    this.stateRegistry = new StateRegistry();
    this.serviceRegistry = new ServiceRegistry(this.stateRegistry);
  }

  render() {
    return (
      <Provider stateRegistry={this.stateRegistry} serviceRegistry={this.serviceRegistry}>
        <ApplicationRouter serviceRegistry={this.serviceRegistry} stateRegistry={this.stateRegistry}/>
      </Provider>
    );
  }

}
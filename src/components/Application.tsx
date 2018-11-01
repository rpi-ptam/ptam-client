"use strict";

import React from "react";
import {StateRegistry} from "../registries/StateRegistry";
import {Provider} from "mobx-react";
import {ApplicationRouter} from "./ApplicationRouter";
import {ServiceRegistry} from "../registries/ServiceRegistry";
import {CacheRegistry} from "../registries/CacheRegistry";

export class Application extends React.Component {

  private readonly stateRegistry: StateRegistry;
  private readonly serviceRegistry: ServiceRegistry;
  private readonly cacheRegistry: CacheRegistry;

  constructor(props: any) {
    super(props);
    this.stateRegistry = new StateRegistry();
    this.serviceRegistry = new ServiceRegistry(this.stateRegistry);
    this.cacheRegistry = new CacheRegistry(this.serviceRegistry);
  }

  render() {
    return (
      <Provider stateRegistry={this.stateRegistry} serviceRegistry={this.serviceRegistry} cacheRegistry={this.cacheRegistry}>
        <ApplicationRouter serviceRegistry={this.serviceRegistry} stateRegistry={this.stateRegistry}/>
      </Provider>
    );
  }

}
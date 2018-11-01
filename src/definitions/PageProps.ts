import { RouteComponentProps } from "react-router";

import { StateRegistry } from "../registries/StateRegistry";
import { ServiceRegistry } from "../registries/ServiceRegistry";
import {CacheRegistry} from "../registries/CacheRegistry";

export interface StatefulComponentProps {
  stateRegistry: StateRegistry,
  serviceRegistry: ServiceRegistry
}

export interface PageProps<T> extends RouteComponentProps<T> {
  stateRegistry: StateRegistry,
  serviceRegistry: ServiceRegistry,
  cacheRegistry: CacheRegistry
}

export interface PagePropsGeneric extends PageProps<{}> {}

export type LoginProps = {
  status?: string
}

export type LoginPageProps = PageProps<LoginProps>;
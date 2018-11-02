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

type LoginProps = {
  status?: string
}

type DecideAppealProps = {
  appealId: number
}

type FileAppealProps = {
  ticketId: number
}

export type LoginPageProps = PageProps<LoginProps>;
export type DecideAppealPageProps = PageProps<DecideAppealProps>;
export type FileAppealPageProps = PageProps<FileAppealProps>;
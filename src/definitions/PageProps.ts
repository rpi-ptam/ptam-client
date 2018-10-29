import { StateRegistry } from "../registries/StateRegistry";
import { RouteComponentProps } from "react-router";

export interface PageProps<T> extends RouteComponentProps<T> {
  stateRegistry: StateRegistry,
}

export interface PagePropsGeneric extends PageProps<{}> {}

export type LoginProps = {
  status?: string
}

export type LoginPageProps = PageProps<LoginProps>;
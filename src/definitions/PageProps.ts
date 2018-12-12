import { RouteComponentProps } from "react-router";
import { PageDependencies } from "./PageDependencies";

export interface StatefulComponentProps {
  pageDependencies: PageDependencies
}

export interface PageProps<T> extends RouteComponentProps<T> {
  pageDependencies: PageDependencies
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

type ViewAppealsProps = {
  pageNumber?: number;
}

export type LoginPageProps = PageProps<LoginProps>;
export type DecideAppealPageProps = PageProps<DecideAppealProps>;
export type FileAppealPageProps = PageProps<FileAppealProps>;
export type ViewAppealsPageProps = PageProps<ViewAppealsProps>;
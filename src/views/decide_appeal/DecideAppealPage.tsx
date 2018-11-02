import React from "react";
import {inject, observer} from "mobx-react";

import { DecideAppealPageProps } from "../../definitions/PageProps";

@inject("stateRegistry", "serviceRegistry", "cacheRegistry")
@observer
export class DecideAppealPage extends React.Component<DecideAppealPageProps> {

  constructor(props: DecideAppealPageProps) {
    super(props);
  }

  async componentDidMount() {
    const { appealsService } = this.props.serviceRegistry;
    await appealsService.fetchAppeal(this.props.match.params.appealId);
  }

  render() {
    const { decideAppealState } = this.props.stateRegistry;
    if (decideAppealState.appealTicketPair === undefined) {
      return (<div/>);
    }
    const { appeal, ticket } = decideAppealState.appealTicketPair;
    void (appeal);
    void (ticket);
    return (
      <div className="container" id="decideAppealPage">
        <div className="columns wrapper">
          <div className="column is-full-mobile is-two-thirds-fullhd">
            <div className="card">
              <h2>Ticket Information</h2>
              <div className="columns">
                <div className="column">
                  <h4>Parking Lot</h4>
                </div>
                <div className="column">
                </div>
              </div>
              <h2>Appeal Information</h2>
              <div className="columns">
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
            </div>
          </div>
        </div>
      </div>
    )
  }

}

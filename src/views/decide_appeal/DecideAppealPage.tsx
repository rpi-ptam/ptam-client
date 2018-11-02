import React from "react";
import {inject, observer} from "mobx-react";

import { DecideAppealPageProps } from "../../definitions/PageProps";

@inject("stateRegistry", "serviceRegistry")
@observer
export class DecideAppealPage extends React.Component<DecideAppealPageProps> {

  constructor(props: DecideAppealPageProps) {
    super(props);
  }

  render() {
    return (
      <div className="container" id="decideAppealPage">
        <div className="columns wrapper">
          <div className="column is-full-mobile is-two-thirds-fullhd">
            <div className="card">
              <h2>Appeal #{this.props.match.params.appealId}</h2>
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

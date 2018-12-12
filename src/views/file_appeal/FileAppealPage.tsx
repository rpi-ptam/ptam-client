import React from "react";
import {inject, observer} from "mobx-react";

import { FileAppealPageProps } from "../../definitions/PageProps";
import {MAXIMUM_APPEAL_JUSTIFICATION_LENGTH} from "../../constants/ViewConstants";
import bind from "bind-decorator";
import {Redirect} from "react-router";

@inject("pageDependencies")
@observer
export class FileAppealPage extends React.Component<FileAppealPageProps> {

  constructor(props: FileAppealPageProps) {
    super(props);
  }

  @bind
  private onJustificationChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { fileAppealState } = this.props.pageDependencies.stateRegistry;
    fileAppealState.updateJustification(event.target.value);
  }

  @bind
  private async onSubmit(): Promise<void> {
    const { fileAppealController } = this.props.pageDependencies.controllerRegistry;
    const ticketId = this.props.match.params.ticketId;
    await fileAppealController.submitAppeal(ticketId);
  }

  render() {
    const { fileAppealState } = this.props.pageDependencies.stateRegistry;
    if (fileAppealState.submittedSuccess) {
      return (<Redirect to="/student-status"/>);
    }
    return (
      <div id="fileAppealPage" className="container">
        <div className="columns">
          <div className="column is-full-mobile is-two-thirds-desktop">
            <div className="card">
              <h2>Appeal Information</h2>
              <h4>Reason for Appeal</h4>
              <textarea value={fileAppealState.justification} onChange={this.onJustificationChange} className="textarea" rows={10}/>
              <p className="count">({fileAppealState.justificationLength} / {MAXIMUM_APPEAL_JUSTIFICATION_LENGTH})</p>
              <button onClick={this.onSubmit} className="button">Complete Appeal</button>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <progress className="progress" value="66" max="100"/>
              <h4>Appeal Process</h4>
              <h5>1.<span>File Ticket</span></h5>
              <h5>2.<span><b>File Appeal</b></span></h5>
              <h5>3.<span>Decision Rendered</span></h5>

              <h4>Guidelines</h4>
              <p style={{marginTop: 20}}>
                Please review the <a target="_blank" href="https://www.rpi.edu/dept/parking/rules.html">Parking Regulations </a>
                before submitting an appeal.
              </p>
              <ul className="instructions">
                <li style={{marginTop: 20}}>
                  Keep the appeal as short as possible, providing only pertinent information.
                </li>
                <li>
                  Address the issue for which the citation was issued.  Incidental matters
                  will not be considered (e.g. “I was late for class,” “It was raining”).
                </li>
                <li>
                  Avoid the temptation to editorialize.
                </li>
                <li>
                  Avoid confusing parking issues with issues of security (e.g. “It was late at night and dark”).
                </li>
              </ul>
              <br/>
              <p className="highlighted">Appeals are almost never granted for any of the reasons listed below:</p>
              <ul className="instructions">
                <li>“Everybody parks there, and I’m the only one who got a ticket.”</li>
                <li>“I was only there for five (or ten, etc.) minutes.”</li>
                <li>“I’ve parked there for the last five weeks (months, years, etc.), and I’ve never been cited before.”</li>
                <li>“I didn’t know.”</li>
                <li>“I thought it was a space.”</li>
                <li>“I did not see the sign.”</li>
                <li>“I can’t afford the fine.”</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

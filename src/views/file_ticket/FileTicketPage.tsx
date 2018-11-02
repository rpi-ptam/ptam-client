import React from "react";
import {inject, observer} from "mobx-react";
import DatePicker from "react-datepicker";
import {PagePropsGeneric} from "../../definitions/PageProps";
import moment from "moment";
import bind from "bind-decorator";

@inject("stateRegistry", "serviceRegistry", "cacheRegistry")
@observer
export class FileTicketPage extends React.Component<PagePropsGeneric> {

  constructor(props: PagePropsGeneric) {
    super(props);
  }

  async componentDidMount() {
    const { fileTicketState } = this.props.stateRegistry;
    await fileTicketState.fillCaches(this.props.cacheRegistry);
  }

  @bind
  private onFieldChange(field: string, event: React.ChangeEvent<HTMLInputElement>) {
    const { fileTicketState } =this.props.stateRegistry;
    fileTicketState.updateTicketField(field, event.target.value);
  }

  render() {
    const { fileTicketState } = this.props.stateRegistry;
    return (
      <div id="fileTicketPage" className="container">
        <div className="columns">
          <div className="column is-full-mobile is-two-thirds-desktop">
            <div className="card">
              <h2>Ticket Information</h2>
              <div className="columns">
                <div className="field column">
                  <label className="label">Ticket Number</label>
                  <div className="control">
                    <input className={fileTicketState.getInputClass("external_id")} onChange={this.onFieldChange.bind(this, "external_id")} type="text"/>
                  </div>
                </div>
                <div className="column field">
                  <label className="label">Ticket Issued</label>
                  <div className="control">
                    <DatePicker maxDate={moment()} selected={fileTicketState.ticketIssueDate} onChange={fileTicketState.updateTicketIssueDate}/>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Violation</label>
                <p className="control">
                  <span className={fileTicketState.getSelectClass("violation")} onChange={this.onFieldChange.bind(this, "violation")}>
                    <select>
                      {fileTicketState.violationOptions}
                    </select>
                  </span>
                </p>
              </div>
              <div className="columns">
                <div className="column field">
                  <label className="label">Vehicle Make</label>
                  <div className="control">
                    <input className={fileTicketState.getInputClass("make")} onChange={this.onFieldChange.bind(this, "make")} type="text"/>
                  </div>
                </div>
                <div className="column field">
                  <label className="label">Vehicle Model</label>
                  <div className="control">
                    <input className={fileTicketState.getInputClass("model")} onChange={this.onFieldChange.bind(this, "model")} type="text"/>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column field">
                  <label className="label">License Plate</label>
                  <div className="control">
                    <input className={fileTicketState.getInputClass("tag")} onChange={this.onFieldChange.bind(this, "tag")} type="text"/>
                  </div>
                </div>
                <div className="column field">
                  <label className="label">Registration State</label>
                  <p className="control">
                  <span className={fileTicketState.getSelectClass("plate_state")} onChange={this.onFieldChange.bind(this, "plate_state")}>
                    <select>
                      {fileTicketState.statesOptions}
                    </select>
                  </span>
                  </p>
                </div>
              </div>
              <div className="field">
                <label className="label">Fine Amount</label>
                <p className="control has-icons-left">
                  <input className={fileTicketState.getInputClass("amount")} onChange={this.onFieldChange.bind(this, "amount")} type="text" placeholder="100.00"/>
                  <span className="icon is-left">$</span>
                </p>
              </div>
              <div className="field">
                <label className="label">Parking Lot</label>
                <p className="control">
                  <span className={fileTicketState.getSelectClass("lot")} onChange={this.onFieldChange.bind(this, "lot")}>
                    <select>
                      {fileTicketState.lotsOptions}
                    </select>
                  </span>
                </p>
              </div>
              <button className="button" onClick={fileTicketState.submit}>Continue</button>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <progress className="progress" value="33" max="100"/>
              <h4>Appeal Process</h4>
              <h5>1.<span>File Ticket</span></h5>
              <h5>2.<span>File Appeal</span></h5>
              <h5>3.<span>Decision Rendered</span></h5>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

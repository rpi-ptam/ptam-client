import React from "react";
import {inject, observer} from "mobx-react";
import DatePicker from "react-datepicker";
import {PagePropsGeneric} from "../../definitions/PageProps";
import moment from "moment";

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
                    <input className="input" type="text"/>
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
                  <span className="select">
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
                    <input className="input" type="text"/>
                  </div>
                </div>
                <div className="column field">
                  <label className="label">Vehicle Model</label>
                  <div className="control">
                    <input className="input" type="text"/>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column field">
                  <label className="label">License Plate</label>
                  <div className="control">
                    <input className="input" type="text"/>
                  </div>
                </div>
                <div className="column field">
                  <label className="label">Registration State</label>
                  <p className="control">
                  <span className="select">
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
                  <input className="input" type="text" placeholder="100.00"/>
                  <span className="icon is-left">$</span>
                </p>
              </div>
              <div className="field">
                <label className="label">Parking Lot</label>
                <p className="control">
                  <span className="select">
                    <select>
                      {fileTicketState.lotsOptions}
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h2>Instructions</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

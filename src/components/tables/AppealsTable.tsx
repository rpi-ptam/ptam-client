import React from "react";
import {AppealTicketPair} from "../../definitions/types/AppealTicketPair";
import {AppealTableItem} from "./AppealTableItem";

type AppealsTableProps = {
  appeals: Array<AppealTicketPair>
}

export class AppealsTable extends React.Component<AppealsTableProps> {

  render() {
    const { appeals } = this.props;
    const tableItems = appeals.map(appeal => <AppealTableItem appeal={appeal} key={appeal.appeal.id}/>);
    return (
      <div className="appeals-table">
        <div className="appeal-table-item header">
          <h4>Appeal Number</h4>
          <h4>Ticket Number</h4>
          <h4>Ticketed On</h4>
          <h4>Appeal Filed On</h4>
          <h4>Decision</h4>
        </div>
        {tableItems}
      </div>
    )
  }

}
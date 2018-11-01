import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { AppealTicketPair } from "../../definitions/types/AppealTicketPair";
import { FriendlyVerdict } from "../../utilities/FriendlyVerdict";

type AppealTableItemProps = {
  appeal: AppealTicketPair
}

export class AppealTableItem extends React.Component<AppealTableItemProps> {

  render() {
    const { appeal } = this.props;
    return (
      <div className="appeal-table-item">
        <h4>
          <Link to={`/decide-appeal/${appeal.appeal.id}`}>{appeal.appeal.id}</Link>
        </h4>
        <h4>{appeal.ticket.external_id}</h4>
        <h4>{moment.parseZone(appeal.ticket.issued_at).format("MMM DD YYYY")}</h4>
        <h4>{moment.parseZone(appeal.appeal.appealed_at).format("MMM DD YYYY")}</h4>
        <h4>{FriendlyVerdict.getTag(appeal.appeal.verdict)}</h4>
      </div>
    )
  }

}
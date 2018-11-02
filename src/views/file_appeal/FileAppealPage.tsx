import React from "react";
import {inject, observer} from "mobx-react";

import { FileAppealPageProps } from "../../definitions/PageProps";

@inject("stateRegistry", "serviceRegistry")
@observer
export class FileAppealPage extends React.Component<FileAppealPageProps> {

  constructor(props: FileAppealPageProps) {
    super(props);
  }

  render() {
    return (
      <div>File Appeal {this.props.match.params.ticketId}</div>
    )
  }

}

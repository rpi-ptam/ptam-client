import React from "react";
import { inject, observer } from "mobx-react";

import { PageProps } from "../../definitions/PageProps";

@inject("stateRegistry")
@observer
export class ViewAppealsPage extends React.Component<PageProps> {

  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return (
      <div>View Appeals</div>
    )
  }

}

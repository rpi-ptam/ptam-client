import React from "react";
import { inject, observer } from "mobx-react";

import { PageProps } from "../../definitions/PageProps";

@inject("stateRegistry")
@observer
export class DecideAppealPage extends React.Component<PageProps> {

  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return (
      <div>Decide Appeals</div>
    )
  }

}

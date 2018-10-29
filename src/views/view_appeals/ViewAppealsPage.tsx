import React from "react";
import {inject, observer} from "mobx-react";

import {PagePropsGeneric} from "../../definitions/PageProps";

@inject("stateRegistry")
@observer
export class ViewAppealsPage extends React.Component<PagePropsGeneric> {

  constructor(props: PagePropsGeneric) {
    super(props);
  }

  render() {
    return (
      <div>View Appeals</div>
    )
  }

}

import React from "react";
import {inject, observer} from "mobx-react";

import {PagePropsGeneric} from "../../definitions/PageProps";

@inject("stateRegistry")
@observer
export class StudentStatusPage extends React.Component<PagePropsGeneric> {

  constructor(props: PagePropsGeneric) {
    super(props);
    console.log(this.props.stateRegistry);
  }

  render() {
    return (
      <div>Student State</div>
    )
  }

}

import React from "react";
import {inject, observer} from "mobx-react";

import {PagePropsGeneric} from "../../definitions/PageProps";

@inject("stateRegistry", "serviceRegistry")
@observer
export class UserManagementPage extends React.Component<PagePropsGeneric> {

  constructor(props: PagePropsGeneric) {
    super(props);
  }

  render() {
    return (
      <div>User Management</div>
    )
  }

}

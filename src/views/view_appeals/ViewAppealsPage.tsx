import React from "react";
import {inject, observer} from "mobx-react";

import {PagePropsGeneric} from "../../definitions/PageProps";
import {AppealsTable} from "../../components/tables/AppealsTable";

@inject("stateRegistry", "serviceRegistry", "cacheRegistry")
@observer
export class ViewAppealsPage extends React.Component<PagePropsGeneric> {

  constructor(props: PagePropsGeneric) {
    super(props);
  }

  async componentDidMount() {
    const { appealsService } = this.props.serviceRegistry;
    const { viewAppealsState } = this.props.stateRegistry;
    await appealsService.fetchStatistics();
    await appealsService.fetchAppealsBulk(viewAppealsState.currentAppealsPageIndex);
  }

  render() {
    const { viewAppealsState } = this.props.stateRegistry;
    return (
      <div id="viewAppealsPage">
        <div className="columns statistics-row">
          <div className="column is-full-mobile">
            <div className="statistic">
              <h3>Open Appeals</h3>
              <h4>{viewAppealsState.statistics && viewAppealsState.statistics.open_appeals}</h4>
            </div>
          </div>
          <div className="column is-full-mobile">
            <div className="statistic">
              <h3>Appeals</h3>
              <div className="inline-stat">
                <h4>This Week</h4>
                <h5>{viewAppealsState.statistics && viewAppealsState.statistics.appeals_this_week}</h5>
              </div>
              <div className="inline-stat">
                <h4>This Month</h4>
                <h5>{viewAppealsState.statistics && viewAppealsState.statistics.appeals_this_month}</h5>
              </div>
              <div className="inline-stat">
                <h4>This Year</h4>
                <h5>{viewAppealsState.statistics && viewAppealsState.statistics.appeals_this_year}</h5>
              </div>
            </div>
          </div>
          <div className="column is-full-mobile">
            <div className="statistic">
              <h3>Appeals Reviewed</h3>
              <div className="inline-stat">
                <h4>This Week</h4>
                <h5>{viewAppealsState.statistics && viewAppealsState.statistics.appeals_reviewed_this_week}</h5>
              </div>
              <div className="inline-stat">
                <h4>This Month</h4>
                <h5>{viewAppealsState.statistics && viewAppealsState.statistics.appeals_reviewed_this_month}</h5>
              </div>
              <div className="inline-stat">
                <h4>This Year</h4>
                <h5>{viewAppealsState.statistics && viewAppealsState.statistics.appeals_reviewed_this_year}</h5>
              </div>
            </div>
          </div>
          <div className="column is-full-mobile">
            <div className="statistic">
              <h3>Lifetime Appeals</h3>
              <h4>{viewAppealsState.statistics && viewAppealsState.statistics.total_appeals}</h4>
            </div>
          </div>
        </div>
        <div className="table-control-row buttons has-addons">
          <span className="button">Open Appeals</span>
          <span className="button">All Appeals</span>
          <span className="button">Closed Appeals</span>
        </div>
        <AppealsTable appeals={viewAppealsState.currentlyViewedAppeals}/>
      </div>
    )
  }

}

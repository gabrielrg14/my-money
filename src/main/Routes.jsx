import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/Dashboard'
import DashboardSemRedux from '../dashboard_sem_redux/DashboardSemRedux'
import BillingCycle from '../billingCycle/BillingCycle'

const Routes = props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/semRedux" component={DashboardSemRedux} />
            <Route path="/billingCycles" component={BillingCycle} />
            <Redirect from="*" to="/" />
        </Switch>
    </div>
)

export default Routes
import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom'
import AppTemplate from './components/templates/AppTemplate'
import requireAuth from './utils/requireAuth'
import ReportsPage from './components/pages/ReportsPage'
import NewReportPage from './components/pages/NewReportPage'
import LoginPage from './components/pages/LoginPage'

function App() {
  return (
    <AppTemplate>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={requireAuth(ReportsPage)} />
        <Route path="/reports/new" component={requireAuth(NewReportPage)} />
      </Switch>
    </AppTemplate>
  )
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
})

const AppContainer = withRouter(
  connect(
    mapStateToProps
  )(App),
)

export default AppContainer
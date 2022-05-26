import { Dashboard } from 'pages'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  )
}

export default Routes

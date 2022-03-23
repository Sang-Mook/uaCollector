import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import MainIndex from '../../components/main'
import Test from '../../components/test'
import NotFound from '../../components/notFound'

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainIndex} />
        <Route path='/test' component={Test} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routers

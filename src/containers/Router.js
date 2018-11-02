import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import NoMatch from './NoMatch';
import LoginPage from './pages/LoginPage';
import SamplePage from './pages/SamplePage';


class _Router extends Component {
  render() {
    const isLoggedIn = { isLoggedIn: this.props.isLoggedIn }; 
    return (
      <Router>
        <div className="top-root">
          {/* <Header /> */}
          <div className="root">
            <Switch>
              <AuthRoute path="/login" component={LoginPage} {...isLoggedIn}/>
              <UserRoute exact path="/" component={SamplePage} {...isLoggedIn}/>

              <Route name="not-found" component={NoMatch} />
            </Switch>
          </div>
          {/*
            <Footer> Footer </Footer>
          */}
        </div>
      </Router>
    )
  }
}

const RedirectToLogin = (props) => (
  <Redirect to={{
    pathname: '/login',
    from: props.location.pathname,
  }}/>
)

const RedirectToMain = (props) => (
  <Redirect to={!!props.location.from
    ? props.location.from
    : "/"}/>
)

export const AuthRoute = (props) => {
  let { component: Component, isLoggedIn, ...rest } = props;
  return (
    <Route {...rest}
      component={!isLoggedIn ? Component : RedirectToMain} />
  )
}

export const UserRoute = (props) => {
  let { component: Component, isLoggedIn, ...rest } = props;
  return (
    <Route {...rest}
      component={isLoggedIn ? Component : RedirectToLogin} />
  )
}


const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = {}

const RouterPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Router);

export default RouterPage;

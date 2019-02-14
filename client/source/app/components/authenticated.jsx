import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homecontests from '../containers/cms_homecontests';
import Articles from '../containers/cms_articles';
import Experts from '../containers/cms_experts';
import Contests from '../containers/cms_contests';
import Winners from '../containers/cms_winners';
import OurContests from '../containers/cms_our_contests';

const AuthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/cms_homecontests" component={() => <Homecontests />} />
    <Route exact path="/cms_articles" component={() => <Articles />} />
    <Route exact path="/cms_experts" component={() => <Experts />} />
    <Route exact path="/cms_contests" component={() => <Contests />} />
    <Route exact path="/cms_winners" component={() => <Winners />} />
    <Route exact path="/cms_our_contests" component={() => <OurContests />} />
  </Switch>
);

export default AuthenticatedRoutes;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homecontests from '../containers/cms_homecontests';
import Articles from '../containers/cms_articles';
import Videos from '../containers/cms_videos';
import Experts from '../containers/cms_experts';
import Contests from '../containers/cms_contests';
import Winners from '../containers/cms_winners';

const AuthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/cms_homecontests" component={() => <Homecontests />} />
    <Route exact path="/cms_articles" component={() => <Articles />} />
    <Route exact path="/cms_videos" component={() => <Videos />} />
    <Route exact path="/cms_experts" component={() => <Experts />} />
    <Route exact path="/cms_contests" component={() => <Contests />} />
    <Route exact path="/cms_winners" component={() => <Winners />} />
  </Switch>
);

export default AuthenticatedRoutes;

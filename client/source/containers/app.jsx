import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux';
import RequireAuth from "./require-auth";
import AuthenticatedRoutes from "../components/authenticated";
import NavBar from '../components/nav-bar';
import Home from './home';
import Video from './videos';
import Articles from './articles';
import VideoPage from './video-page';
import ArticlePage from './article-page';
import Experts from './experts';
import ExpertPage from './expert-page';
import Info from './info';
import Contact from './contact';
import SearchResults from './search-results';
import Contests from './contests';
import Sales from './sales';
import Login from './login';
import Register from './register';
import Footer from './footer';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div style={{ height: '100%' }} >
            <NavBar>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/video" component={Video} />
              <Route exact path="/blog" component={Articles} />
              <Route path="/video/:id" component={VideoPage} />
              <Route path="/blog/:id" component={ArticlePage} />
              <Route exact path="/expert" component={Experts} />
              <Route path="/expert/:id" component={ExpertPage} />
              <Route path="/info" component={Info} />
              <Route path="/contact" component={Contact} />
              <Route path="/search" component={SearchResults} />
              <Route path="/contests" component={Contests} />
              <Route path="/sales" component={Sales} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/cms_homecontests" component={RequireAuth(AuthenticatedRoutes)} />
              <Route path="/cms_articles" component={RequireAuth(AuthenticatedRoutes)} />
              <Route path="/cms_videos" component={RequireAuth(AuthenticatedRoutes)} />
              <Route path="/cms_experts" component={RequireAuth(AuthenticatedRoutes)} />
              <Route path="/cms_contests" component={RequireAuth(AuthenticatedRoutes)} />
              <Route path="/cms_winners" component={RequireAuth(AuthenticatedRoutes)} />
            </Switch>
            <Footer />
            </NavBar>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

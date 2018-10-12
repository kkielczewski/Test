import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
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
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
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
          </Switch>
          <Footer />
          </NavBar>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

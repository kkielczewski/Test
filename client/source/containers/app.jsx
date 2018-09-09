import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Home from './home';
import Video from './video';
import Articles from './articles';
import VideoPage from './video-page';
import ArticlePage from './article-page';
import Experts from './experts';
import ExpertPage from './expert-page';
import Info from './info';
import Contact from './contact';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter forceRefresh={true} >
        <div style={{ height: '100%' }} >
          <NavBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/blog" component={Articles} />
            <Route exact path="/video/:id" component={VideoPage} />
            <Route exact path="/article/:id" component={ArticlePage} />
            <Route exact path="/expert" component={Experts} />
            <Route exact path="/expert/:id" component={ExpertPage} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
          </NavBar>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

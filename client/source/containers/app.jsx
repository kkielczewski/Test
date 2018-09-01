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

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/blog" component={Articles} />
            <Route exact path="/video/:id" component={VideoPage} />
            <Route exact path="/article/:id" component={ArticlePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

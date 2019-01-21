import React from 'react';
import Carousel from './carousel';
import Videos from './videos';
import SocialFeed from './social-feed';

const items = [{ id: '1', name: 'Bob', picture: '' },
  { id: '2', name: 'Bob', picture: '' },
  { id: '3', name: 'Bob', picture: '' },
  { id: '4', name: 'Bob', picture: '' },
  { id: '5', name: 'Bob', picture: '' },
  { id: '6', name: 'Bob', picture: '' },
  { id: '7', name: 'Bob', picture: '' },
  { id: '8', name: 'Bob', picture: '' },
  { id: '9', name: 'Bob', picture: '' },
  { id: '10', name: 'Bob', picture: '' },
  { id: '11', name: 'Bob', picture: '' },
  { id: '12', name: 'Bob', picture: '' },
  { id: '13', name: 'Bob', picture: '' },
  { id: '14', name: 'Bob', picture: '' },
  { id: '15', name: 'Bob', picture: '' }];

class MainFeed extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '80px', boxShadow: '0px -5px 10px 0px rgba(0,0,0,0.3)' }} >
        <Carousel items={items} active ={0} />
        <div className="tvRow" >
          <div className="tvMain" >
            <div className="videosLabel" >Latest Videos</div>
            <Videos />
          </div>
          <div className="tvSide" >
            <div className="socialLabel" >Social Feed</div>
            <SocialFeed />
          </div>
        </div>
      </div>
    );
  }
}

export default MainFeed;

import React from 'react';
import { Tweet } from 'react-twitter-widgets';
import MediaQuery from 'react-responsive';

import FacebookItem from '../components/facebook-item';

class SocialFeed extends React.Component {
  render() {
    return (
      <div className='socialFeed' >
        <MediaQuery query="(min-width: 1300px)" >
          <FacebookItem
          source="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAllecco&tabs&width=500&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="500"
          height="130" />
          <FacebookItem
          source="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAllecco%2Fposts%2F1973284962721956&width=500&show_text=true&appId=293440537856514&height=788"
          width="500"
          height="788" />
          <div className='twitterItem' ><Tweet tweetId="1026547971389775878" /></div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1299px)" >
          <MediaQuery query="(min-width: 993px)" >
            <FacebookItem
            source="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAllecco&tabs&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            width="300"
            height="130" />
            <FacebookItem
            source="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAllecco%2Fposts%2F1973284962721956&width=300&show_text=true&appId=293440537856514&height=788"
            width="300"
            height="788" />
            <div className='twitterItem' ><Tweet options={{ width: '300' }} tweetId="1026547971389775878" /></div>
          </MediaQuery>
          <MediaQuery query="(max-width: 992px)" >
            <MediaQuery query="(min-width: 600px)">
              <FacebookItem
              source="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAllecco&tabs&width=500&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="500"
              height="130" />
              <FacebookItem
              source="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAllecco%2Fposts%2F1973284962721956&width=500&show_text=true&appId=293440537856514&height=788"
              width="500"
              height="788" />
              <div className='twitterItem' ><Tweet options={{ width: '500' }} tweetId="1026547971389775878" /></div>
            </MediaQuery>
            <MediaQuery query="(max-width: 599px)">
              <FacebookItem
              source="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAllecco&tabs&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="300"
              height="130" />
              <FacebookItem
              source="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAllecco%2Fposts%2F1973284962721956&width=300&show_text=true&appId=293440537856514&height=788"
              width="300"
              height="788" />
              <div className='twitterItem' ><Tweet options={{ width: '300' }} tweetId="1026547971389775878" /></div>
            </MediaQuery>
          </MediaQuery>
        </MediaQuery>
      </div>
    );
  }
}

export default SocialFeed;

import React from 'react';
import toastr from 'toastr';
import { getVideoStats, postYoutube } from '../utils/youtube-utils';

let GoogleAuth;

toastr.options = { closeButton: true, positionClass: 'toast-bottom-right' };

function setSigninStatus() {
  const user = GoogleAuth.currentUser.get();
  const isAuthorized = user.hasGrantedScopes('https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner');
  // Toggle button text and displayed statement based on current auth status.
}

function updateSigninStatus(isSignedIn) {
  setSigninStatus();
}

function initClient() {
  // Initialize the gapi.client object, which app uses to make API requests.
  // Get client ID from API Console.
  // 'scope' field specifies space-delimited list of access scopes

  window.gapi.client.init({
    clientId: '291647179251-29n2qbqb6qb2msl65o1v1rl8fpb5fgui.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    scope: 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'
  }).then(() => {
    GoogleAuth = window.gapi.auth2.getAuthInstance();

    // Listen for sign-in state changes.
    GoogleAuth.isSignedIn.listen(updateSigninStatus);

    // Handle initial sign-in state. (Determine if user is already signed in.)
    setSigninStatus();
  });
}

/**
 * Load the API's client and auth2 modules.
 * Call the initClient function after the modules load.
 */
function handleClientLoad() {
  window.gapi.load('client:auth2', initClient);
}

function handleAuthClick(event) {
  // Sign user in after click on auth button.
  GoogleAuth.signIn();
}

function createResource(properties) {
  const resource = {};
  const normalizedProps = properties;
  for (const p in properties) {
    const value = properties[p];
    if (p && p.substr(-2, 2) === '[]') {
      const adjustedName = p.replace('[]', '');
      if (value) {
        normalizedProps[adjustedName] = value.split(',');
      }
      delete normalizedProps[p];
    }
  }
  for (const p in normalizedProps) {
    // Leave properties that don't have values out of inserted resource.
    if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {
      const propArray = p.split('.');
      let ref = resource;
      for (let pa = 0; pa < propArray.length; pa += 1) {
        const key = propArray[pa];
        if (pa === propArray.length - 1) {
          ref[key] = normalizedProps[p];
        } else {
          ref = ref[key] = ref[key] || {};
        }
      }
    }
  }
  return resource;
}

function removeEmptyParams(params) {
  for (const p in params) {
    if (!params[p] || params[p] === 'undefined') {
      delete params[p];
    }
  }
  return params;
}

function executeRequest(request, rating) {
  request.execute((response) => {
    if (rating === 'like') {
      toastr.info('Thank you for liking the video.');
    }
    if (rating === 'dislike') {
      toastr.info('You disliked this video.');
    }
    if (rating === 'subscribe') {
      toastr.info('Thank you for subscribing to our youtube channel.');
    }
  });
}

function buildApiRequest(requestMethod, path, params, properties, rating) {
  params = removeEmptyParams(params);
  let request;
  if (properties) {
    const resource = createResource(properties);
    request = window.gapi.client.request({
      body: resource,
      method: requestMethod,
      path,
      params
    });
  } else {
    request = window.gapi.client.request({
      method: requestMethod,
      path,
      params
    });
  }
  executeRequest(request, rating);
}

function videosRate(params) {
  params = removeEmptyParams(params); // See full sample for function
  const request = window.gapi.client.youtube.videos.rate(params);
  executeRequest(request, params.rating);
}

function defineRequest(id, rating) {
  videosRate({ id, rating });
}

class VideoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.shareFacebook = this.shareFacebook.bind(this);
    this.shareTwitter = this.shareTwitter.bind(this);
    this.likeVideo = this.likeVideo.bind(this);
    this.dislikeVideo = this.dislikeVideo.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  async componentDidMount() {
    /* const object = await getVideoStats(this.props.video.snippet.resourceId.videoId);
    this.setState({ likeCount: object.likeCount, dislikeCount: object.dislikeCount, viewCount: object.viewCount }); */
    handleClientLoad();
  }
  /*
  async componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.video) !== JSON.stringify(prevProps.video)) {
      const object = await getVideoStats(this.props.video.snippet.resourceId.videoId);
      this.setState({ likeCount: object.likeCount, dislikeCount: object.dislikeCount, viewCount: object.viewCount });
    }
  }
*/

  shareFacebook() {
    const facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=' + this.props.video.snippet.resourceId.videoId, 'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) { facebookWindow.focus(); }
    return false;
  }

  shareTwitter() {
    const twitterWindow = window.open('https://twitter.com/share?url=https://www.youtube.com/watch?v=' + this.props.video.snippet.resourceId.videoId, 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) { twitterWindow.focus(); }
    return false;
  }

  async likeVideo() {
    if (!GoogleAuth.isSignedIn.get()) {
      await GoogleAuth.signIn();
    }
    defineRequest(this.props.video.snippet.resourceId.videoId, 'like');
  }

  async dislikeVideo() {
    if (!GoogleAuth.isSignedIn.get()) {
      await GoogleAuth.signIn();
    }
    defineRequest(this.props.video.snippet.resourceId.videoId, 'dislike');
  }

  async subscribe() {
    if (!GoogleAuth.isSignedIn.get()) {
      await GoogleAuth.signIn();
    }
    buildApiRequest('POST',
      '/youtube/v3/subscriptions',
      { part: 'snippet' },
      {
        'snippet.resourceId.kind': 'youtube#channel',
        'snippet.resourceId.channelId': 'UC_x5XG1OV2P6uZZ5FSM9Ttw'
      },
      'subscribe');
  }

  render() {
    return (
      <div className='videoPanel playlistPanel' >
        <div className='video' >
          <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + this.props.video.snippet.resourceId.videoId + '?rel=0'} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div className='sidePanel' >
          <div class="box like" onClick={ this.likeVideo} >
            <span class="nameOnly">Like</span>
          </div>
          <div class="box dislike" onClick={ this.dislikeVideo}>
            <span class="nameOnly">Dislike</span>
          </div>
          <div class="box subscribe" onClick={ this.subscribe } >
            <span class="nameOnly">Subscribe</span>
          </div>
          <div class="box shareFacebook" onClick={ this.shareFacebook } >
            <span class="value">Share on</span>
            <span class="name">Facebook</span>
          </div>
          <div class="box shareTwitter" onClick={ this.shareTwitter } >
            <span class="value">Share on</span>
            <span class="name">Twitter</span>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPanel;

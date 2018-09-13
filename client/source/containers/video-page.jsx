import React from 'react';
import { Header, Button, Image, Icon, Input, Responsive, Segment } from 'semantic-ui-react';
import Slider from 'react-slick';
import toastr from 'toastr';
import MainMovies from './main-movies';
import VideoCard from '../components/video-card';
import VideoCardBig from '../components/video-card-big';
import ProductCard from '../components/product-card';
import Advice from '../components/advice';
import { getVideo, getSomeVideos } from '../utils/youtube-utils';
import Avatar from '../assets/images/avatarPlaceholder.png';

// Youtube API

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


class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      allVideos: [],
      expertVideos: [],
      id: '',
      image: '',
      title: '',
      expert: ''
    };

    this.shareFacebook = this.shareFacebook.bind(this);
    this.shareTwitter = this.shareTwitter.bind(this);
    this.likeVideo = this.likeVideo.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  async componentDidMount() {
    handleClientLoad();
    const object = await getVideo(this.props.match.params.id);
    const allObject = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    const all = [];

    allObject.videos.forEach((element) => {
      if (element.snippet.title.indexOf(object.snippet.title.slice(0, object.snippet.title.indexOf(','))) !== -1) {
        all.push(element);
      }
    });

    const products = [{ link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' },
      { link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' }];

    this.setState({ allProducts: products, allVideos: allObject.videos, id: object.id, image: object.snippet.thumbnails.maxres.url, title: object.snippet.title, expert: object.snippet.title.slice(0, object.snippet.title.indexOf(',')), expertVideos: all });
  }

  shareFacebook() {
    const facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=' + this.state.id, 'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) { facebookWindow.focus(); }
    return false;
  }

  shareTwitter() {
    const twitterWindow = window.open('https://twitter.com/share?url=https://www.youtube.com/watch?v=' + this.state.id, 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) { twitterWindow.focus(); }
    return false;
  }

  async likeVideo() {
    if (!GoogleAuth.isSignedIn.get()) {
      await GoogleAuth.signIn();
    }
    defineRequest(this.state.id, 'like');
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
        'snippet.resourceId.channelId': 'UClYlNvdBOuwuQZrCle9BrcA'
      },
      'subscribe');
  }

  render() {
    const productsSettings = {
      className: 'productCarousel',
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 7,
      slidesToScroll: 3,
      speed: 300,
      focusOnSelect: true,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 2170,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 1420,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <div className='videoPageContainer' >
          <div className='main' >
            <VideoCardBig imageClass='videoImage' id={this.state.id} image={this.state.image} />
            <div className='title' >
              <Header>{this.state.title}</Header>
              <div className='buttons' >
                <Button color='blue' onClick={this.subscribe} ><Icon name='share' />Subskrybuj na YT</Button>
                <Responsive maxWidth='1020' >
                <div className='social' >
                  <Button onClick={this.shareFacebook} color='facebook' icon='facebook' />
                  <Button onClick={this.shareTwitter} color='twitter' icon='twitter' />
                </div>
                </Responsive>
              </div>
            </div>
            <div className='description' >
            Opis filmu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
          <div className='sidePanel' >
            <div className='center' >
              <Header>OSTATNIE FILMY</Header>
              <div className='lastAMVideo' >
                {this.state.allVideos.slice(0, 3).map(video => <VideoCard imageClass='Image' video={video} />)}
              </div>
              <Header>UDOSTĘPNIJ</Header>
              <div className='social' >
                <Button onClick={this.shareFacebook} color='facebook' icon='facebook' />
                <Button onClick={this.shareTwitter} color='twitter' icon='twitter' />
              </div>
            </div>
          </div>
        </div>
        <div style={{ clear: 'both', marginBottom: '30px' }} >
        <div className='expertContainer' >
          <div className='imageContainer' >
            <Image src={Avatar} className='expertImage' />
          </div>
          <div className='details' >
            <Header>{this.state.expert}</Header>
            <div className='description' >KILKA SLOW O EKSPERCIE Opis filmu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
        </div>
        </div>
        <Advice />
        <div className='otherMovies' >
          <Header className='recomendedProducts' dividing textAlign='center' size='huge' >Inne filmy experta:</Header>
          <div className='mainMovies' >
            {this.state.expertVideos.slice(0, 6).map(video => <VideoCard imageClass='listImage' contentClass='listContent' video={video} />)}
          </div>
        </div>
        <Responsive maxWidth='1020' >
          <Header className='recomendedProducts' dividing textAlign='center' size='huge' >Ostatnie Filmy</Header>
          <MainMovies />
        </Responsive>
        <Header dividing className='recomendedProducts' textAlign='center' size='huge' >Polecane produkty</Header>
        <Slider {...productsSettings} >
          {this.state.allProducts.map(product => <ProductCard product={product} />)}
        </Slider>
      </div>
    );
  }
}

export default VideoPage;

import React from 'react';
import { Header, Responsive } from 'semantic-ui-react';
import ImageLink from '../components/image-link';
import { getVideo } from '../utils/youtube-utils';
import VideoPlaceholder from '../assets/images/video-placeholder.jpg';

class MainContest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      url: '',
      otherContests: []
    };
  }

  async componentDidMount() {
    const object = await getVideo('ijck5-u4yoI');

    const contests = [{ link: 'https://www.instagram.com/p/BoRICjtFK6e/?utm_source=ig_embed&ig_mid=W7TNOgALAAGCHrg6QKwKecVEgjSz', image: VideoPlaceholder },
      { link: 'https://www.instagram.com/p/BnqRKDglSU0/?utm_source=ig_embed&ig_mid=W7TNOgALAAGCHrg6QKwKecVEgjSz', image: VideoPlaceholder },
      { link: 'https://www.facebook.com/Allecco/posts/2075634332487018', image: VideoPlaceholder },
      { link: 'https://www.facebook.com/Allecco/posts/2069247059792412', image: VideoPlaceholder }];

    this.setState({ id: object.id, url: object.snippet.thumbnails.maxres.url, otherContests: contests });
  }

  render() {
    return (
      <div className='allContests' >
        <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
        <Header className='recomendedProducts allContestsHeader' textAlign='center' >KONKURSY</Header>
        <div className='mainContest' >
          <iframe src={'https://www.youtube.com/embed/' + this.state.id + '?rel=0'} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
        </div>
        <div className='otherContests' >
          {this.state.otherContests.map(contest => <ImageLink link={contest.link} image={contest.image} />)}
        </div>
      </div>
    );
  }
}

export default MainContest;

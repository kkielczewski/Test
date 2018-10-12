import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Header } from 'semantic-ui-react';
import FBEmbedPost from '../components/FBEmbedPost';

class FbInContests extends React.Component {
  render() {
    return (
      <div className='fbinContainer' >
        <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
        <Header className='recomendedProducts oursContestsHeader' textAlign='center' size='huge' >Nasze Konkursy</Header>
        <div className='fbinContests' >
          <div className='instagramPost' ><InstagramEmbed
            url='https://instagr.am/p/BoRICjtFK6e/'
            maxWidth={450}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          /></div>
          <div className='instagramPost' ><InstagramEmbed
            url='https://instagr.am/p/BnqRKDglSU0/'
            maxWidth={450}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          /></div>
          <div className='facebookPost' ><FBEmbedPost appId='261243031198838' href='https://www.facebook.com/Allecco/posts/2069247059792412' width='450' /></div>
          <div className='facebookPost' ><FBEmbedPost appId='261243031198838' href='https://www.facebook.com/Allecco/posts/2049753141741804' width='450' /></div>
        </div>
      </div>
    );
  }
}

export default FbInContests;

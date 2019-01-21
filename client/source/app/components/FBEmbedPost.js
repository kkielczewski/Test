import React, { Component } from 'react';

const xfbml = true;
const version = 'v3.1';
const locale = 'pl_PL';

export default class FBEmbedPost extends Component {
  componentDidMount() {
    const { appId } = this.props;
    window.fbAsyncInit = () => {
      FB.init({ // eslint-disable-line no-undef
        appId,
        xfbml,
        version
      });
    };

    // Load the SDK asynchronously
    ((d, s, id) => { // eslint-disable-line id-length
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = `//connect.facebook.net/${locale}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  componentDidUpdate() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }

  render() {
    const { href, width } = this.props;
    return (
      <span>
        <div id="fb-root"></div>
        <div className="fb-post" data-href={href} data-width={width} ></div>
      </span>
    );
  }
}

import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.goToTop = this.goToTop.bind(this);
  }

  goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div className='footer' >
        <div className='footerContent' >
          <div className='copyright' >Copyright © 2018</div>
          <div className='goToTop' onClick={this.goToTop} >Wróc do góry</div>
        </div>
      </div>
    );
  }
}

export default Footer;

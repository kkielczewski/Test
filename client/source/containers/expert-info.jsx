import React from 'react';
import { Header, Image } from 'semantic-ui-react';

class ExpertInfo extends React.Component {
  render() {
    return (
      <div style={{ clear: 'both', marginBottom: '30px' }} >
        <div className={`whiteContainer doctorInfo ${this.props.expertClass}`} >
          <div className='background whiteHundred' />
          <div className='expertContainer' >
            <div className='imageContainer' >
              <Image src={this.props.avatar} />
            </div>
            <div className='details' >
              <Header>{this.props.expert}</Header>
              <div className='description' >KILKA SLOW O EKSPERCIE Opis filmu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpertInfo;

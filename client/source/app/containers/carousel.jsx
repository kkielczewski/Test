import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import MediaQuery from 'react-responsive';
import Swipeable from 'react-swipeable';
import CarouselSlot from '../components/carousel-slot';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: '',
      clicked: false
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems(size) {
    const items = [];
    let level;
    for (let i = this.state.active - 3; i < this.state.active + (size - 3); i += 1) {
      let index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(<CarouselSlot key={index} person={this.state.items[index]} level={level} />);
    }
    return items;
  }

  moveLeft() {
    if (this.state.clicked === false) {
      let newActive = this.state.active;
      newActive -= 1;
      this.setState({
        active: newActive < 0 ? this.state.items.length - 1 : newActive,
        direction: 'left',
        clicked: true
      });
      setTimeout(() => this.setState({ clicked: false }), 1000);
    }
  }

  moveRight() {
    if (this.state.clicked === false) {
      const newActive = this.state.active;
      this.setState({
        active: (newActive + 1) % this.state.items.length,
        direction: 'right',
        clicked: true
      });
      setTimeout(() => this.setState({ clicked: false }), 1000);
    }
  }

  render() {
    return (
      <div className="carMain" >
		<Swipeable onSwipedLeft={this.rightClick} onSwipedRight={this.leftClick} >
        <MediaQuery query="(min-width: 1520px)" >
          <div id="carousel" style={{ width: '1504px' }} >
            <div className="arrowbtn arrowbtn-left" onClick={this.leftClick}></div>
            <CSSTransitionGroup transitionName={this.state.direction} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
              {this.generateItems(7)}
            </CSSTransitionGroup>
            <div className="arrowbtn arrowbtn-right" style={{ left: '1452px' }} onClick={this.rightClick}></div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1519px)" >
          <MediaQuery query="(min-width: 1120px)" >
            <div id="carousel" style={{ width: '1102px' }} >
              <div className="arrowbtn arrowbtn-left" onClick={this.leftClick}></div>
              <CSSTransitionGroup transitionName={this.state.direction} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                {this.generateItems(5)}
              </CSSTransitionGroup>
              <div className="arrowbtn arrowbtn-right" style={{ left: '1050px' }} onClick={this.rightClick}></div>
            </div>
          </MediaQuery>
          <MediaQuery query="(max-width: 1119px)" >
            <MediaQuery query="(min-width: 720px)" >
              <div id="carousel" style={{ width: '704px' }} >
                <div className="arrowbtn arrowbtn-left" onClick={this.leftClick}></div>
                <CSSTransitionGroup transitionName={this.state.direction} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                  {this.generateItems(3)}
                </CSSTransitionGroup>
                <div className="arrowbtn arrowbtn-right" style={{ left: '652px' }} onClick={this.rightClick}></div>
              </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 719px)" >
              <div id="carousel" style={{ width: '304px' }} >
                <div className="arrowbtn arrowbtn-left" onClick={this.leftClick}></div>
                <CSSTransitionGroup transitionName={this.state.direction} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                  {this.generateItems(1)}
                </CSSTransitionGroup>
                <div className="arrowbtn arrowbtn-right" style={{ left: '252px' }} onClick={this.rightClick}></div>
              </div>
            </MediaQuery>
          </MediaQuery>
        </MediaQuery>
		</Swipeable>
      </div>
    );
  }
}

export default Carousel;

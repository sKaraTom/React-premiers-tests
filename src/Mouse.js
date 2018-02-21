import React from 'react';
import cat from './cat.png';

/** 
 * image de chat suivant la position de la souris (envoyée via les props).
*/
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={cat} style={{ position: 'absolute', left: mouse.x, top: mouse.y, width:'30px' }} alt="cat" />
    );
  }
}

/** 
 * Composant Mouse enregistrant la position de la souris dans une div
*/
class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.state = { x: 0, y: 0 };
      this.handleMouseMove = this.handleMouseMove.bind(this);
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
    render() {
      return (
        <div style={{ height: '200px', backgroundColor:'cornflowerblue'}} onMouseMove={this.handleMouseMove}>
          {this.props.render(this.state)}
        </div>
      );
    }
  }
  
  /** 
   * composant parent
   * Mouse envoie ses props à Cat
  */
  class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h3>Move the mouse around!</h3>
          <Mouse render={mouse => (
            <Cat mouse={mouse} />
            )} />
        </div>
      );
    }
  }

export default MouseTracker;
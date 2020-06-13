import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div style={{border:'3px solid #f00'}}>
        <h3>页头组件</h3>
          <h1 align = "center"  className = "header">Hii Swapnil Here</h1>
      </div>
    )
  }
}

export default Header;

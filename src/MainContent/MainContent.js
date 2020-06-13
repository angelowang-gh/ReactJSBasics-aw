import React, {Component} from 'react';
import './MainContent.css';

class MainContent extends Component {
  render() {
    let props = this.props;
    return (
      <div style={{border:'3px solid #878787'}}>
        <h3>主内容组件</h3>
        <div className={"mainText"} >
          <h1 align="top">{props.name}</h1>
          <h2 className={"rollNo"}> {props.rollno}</h2>
          <h2 className={"college"}>SIES GST, Nerul</h2>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

export default MainContent;
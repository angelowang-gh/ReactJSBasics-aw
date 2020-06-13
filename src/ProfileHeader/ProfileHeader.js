import React, {Component} from 'react';
import './ProfileHeader.css';

class ProfileHeader extends Component {
  render() {
    let {imgurl} = this.props;
    return (
      <div style={{border:'3px solid #fa0000'}}>
        <h3>头像图片</h3>
        <img className="profilePic" alt= "" src={imgurl} align="center"/>
      </div>
    )
  }
}

export default ProfileHeader;
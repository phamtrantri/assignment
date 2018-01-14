import React from 'react';
import { Link } from 'react-router';
import '../../styles/Footer.css';
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container footer-position">
          <div className="row">
            <div className="col-sm-4">
              <h3>Contact</h3>
              <p><i className="fa fa-envelope"></i> phamtrantri@gmail.com</p>
              <p><i className="fa fa-map-marker"></i> 18/16 Tran Quang Dieu Street Dist 3, Ho Chi Minh City, Vietnam</p>
              <p><i className="fa fa-phone"></i> (84) 122 541 7247</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

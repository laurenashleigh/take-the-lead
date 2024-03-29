import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="#401F34" className="font-small pt-4 mt-4">
      {/* <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
      <div className="footer-copyright text-center py-3">

        <a className="facebook-icon" href="https://www.facebook.com/taketheleaddance" target="_blank">
          <img
            src="../images/facebook.png"
            alt="facebook"
            height="40px"
          />
        </a>
        <a href="https://www.instagram.com/taketheleadballroom/" target="_blank">
          <img
            src="../images/instagram.png"
            alt="instagram"
            height="42px"
          />
        </a>
        <MDBContainer fluid className="copyright-container">
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Take The Lead Dance </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
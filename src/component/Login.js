import React, { Component } from "react";
import { FacebookProvider, ShareButton } from "react-facebook";
// import ShareButton from "react-facebook/dist/ShareButton";

class Login extends Component {
  handleResponse = (data) => {
    console.log(data);
  };

  handleError = (error) => {
    this.setState({ error });
  };

  render() {
    return (
      <FacebookProvider appId="2291497574308644">
        <ShareButton
          href="http://www.facebook.com"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          <span>ShareButton</span>
        </ShareButton>
      </FacebookProvider>
    );
  }
}
export default Login;

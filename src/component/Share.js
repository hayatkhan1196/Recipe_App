import React, { Component } from "react";
import { FacebookProvider, Share } from "react-facebook";

class ShareButton extends Component {
  render() {
    return (
      <FacebookProvider appId="2291497574308644">
        <Share href="http://www.facebook.com">
          {({ handleClick, loading }) => (
            <button type="button" disabled={loading} onClick={handleClick}>
              Share
            </button>
          )}
        </Share>
      </FacebookProvider>
    );
  }
}
export default ShareButton;

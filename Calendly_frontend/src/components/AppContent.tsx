import React from "react";
import WelcomeContent from "./WelcomeContent";
import AuthContent from "./AuthContent";

class AppContent extends React.Component {
  render() {
    return (
      <div>
        <WelcomeContent />
        <AuthContent />
      </div>
    );
  }
}

export default AppContent;

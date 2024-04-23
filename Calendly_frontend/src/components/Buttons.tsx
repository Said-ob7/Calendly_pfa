import * as React from "react";

interface ButtonsProps {
  login: () => void;
  logout: () => void;
}

const Buttons: React.FC<ButtonsProps> = (props) => {
  return (
    <div className="">
      <button className="fancy" onClick={props.login}>
        <span className="top-key"></span>
        <span className="text">Login</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
      <button className="fancy" onClick={props.logout}>
        <span className="top-key"></span>
        <span className="text">Logout</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </div>
  );
};

export default Buttons;

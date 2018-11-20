import React from "react";

const OpenBrowser = props => {
  return (
    <div>
      <button
        className="btn btn-circular"
        onClick={() =>
          props.openBrowser("chrome", props.user ? props.user : "")
        }
      >
        <i className="fa fa-chrome" />
      </button>
      <button
        className="btn btn-circular"
        onClick={() =>
          props.openBrowser("firefox", props.user ? props.user : "")
        }
      >
        <i className="fa fa-firefox" />
      </button>
      <button
        className="btn btn-circular"
        onClick={() => props.openBrowser("edge", props.user ? props.user : "")}
      >
        <i className="fa fa-edge" />
      </button>
    </div>
  );
};

export default OpenBrowser;

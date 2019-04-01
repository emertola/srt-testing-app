import React from "react";

import OpenBrowser from "./OpenBrowser";

const AddLink = props => {
  return (
    <div className="col-lg-12">
      <div className="card card-custom">
        <div className="card-header"><h3><i className="fa fa-info-circle" /> Testing Details</h3></div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-8">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">https://</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your URL here..."
                  onChange={props.urlChange}
                  value={props.importURL}
                />
              </div>
            </div>
            <div className="col-auto">
              <OpenBrowser openBrowser={props.openBrowser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLink;

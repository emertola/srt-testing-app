import React from "react";

import AddLink from "./AddLink";
import AddUser from "./AddUser";

const AddDetails = props => {
    
  return (
    <div className="col-lg-6">
      <AddLink urlChange={props.urlChange} openBrowser={props.openBrowser} />
      <AddUser addUserObj={props.addUserObj} />
    </div>
  );
};

export default AddDetails;

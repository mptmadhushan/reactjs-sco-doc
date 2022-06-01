import React from "react";
import adminLayout from "../hoc/adminLayout";

class AdminBlankPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <p>Doctor recommendation according to the month</p>
        <img alt="Alt content" src={require("./../assets/images/6-month-basic.png")} />
      </>
    );
  }
}

export default adminLayout(AdminBlankPage);

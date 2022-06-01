import React from "react";
import adminLayout from "../hoc/adminLayout";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <h1>What is the scoliosis Type?</h1>
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <div className="card-body">
                <img
                  alt="Alt content"
                  style={{ width: `100%` }}
                  src={require("./../assets/images/avatar.png")}
                />
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-comments"></i>
                </div>
                <div className="mr-5">Dr. Chris</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-warning o-hidden h-100">
              <div className="card-body">
                <img
                  alt="Alt content"
                  style={{ width: `100%` }}
                  src={require("./../assets/images/avatar.png")}
                />
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-comments"></i>
                </div>
                <div className="mr-5">Dr. Pierre</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-success o-hidden h-100">
              <div className="card-body">
                <img
                  alt="Alt content"
                  style={{ width: `100%` }}
                  src={require("./../assets/images/avatar.png")}
                />
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-comments"></i>
                </div>
                <div className="mr-5">Dr. Jake</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-danger o-hidden h-100">
              <div className="card-body">
                <img
                  alt="Alt content"
                  style={{ width: `100%` }}
                  src={require("./../assets/images/avatar.png")}
                />
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-comments"></i>
                </div>
                <div className="mr-5">Dr. Gerry</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default adminLayout(DashboardPage);

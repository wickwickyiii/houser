import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateImg } from "../../ducks/reducer";

class StepTwo extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel() {
    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Add New Listing</h1>
          <Link to="/">
            <button onClick={() => this.handleCancel()}>Cancel</button>
          </Link>
          <h4>Image URL</h4>
          <input onChange={e => updateImg(e)} />

          <Link to="/stepone">
            <button>Previous Step</button>
          </Link>
          <Link to="stepthree">
            <button>Next Step</button>
          </Link>
        </div>
      </HashRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    img: state.img
  };
}

export default connect(
  mapStateToProps,
  {
    updateImg
  }
)(StepTwo);

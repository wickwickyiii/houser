import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updatePropertyName,
  updateAddress,
  updateCity,
  updateState,
  updateZip
} from "../../ducks/reducer";

class StepOne extends Component {
  constructor() {
    super();
    this.state = {};
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
          <h5>Property Name</h5>
          <input
            onChange={e => updatePropertyName(e)}
            placeholder="Property Name"
          />

          <h5>Address</h5>
          <input onChange={e => updateAddress(e)} placeholder="Address" />

          <h5>City</h5>
          <input onChange={e => updateCity(e)} placeholder="City" />

          <h5>State</h5>
          <input onChange={e => updateState(e)} placeholder="State" />

          <h5>Zip Code</h5>
          <input onChange={e => updateZip(e)} placeholder="Zip Code" />
          <Link to="/steptwo">
            <button>Next Step</button>
          </Link>
        </div>
      </HashRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    property_name: state.property_name,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip
  };
}

export default connect(
  mapStateToProps,
  {
    updatePropertyName,
    updateAddress,
    updateCity,
    updateState,
    updateZip
  }
)(StepOne);

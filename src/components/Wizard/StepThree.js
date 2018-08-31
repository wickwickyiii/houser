import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {
  updateMonthlyMortgage,
  updateDesiredMonthlyRent
} from "../../ducks/reducer";

class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      recommendedRent: 0
    };
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

  async componentWillMount(property_name, address, city, state, zip) {
    await axios
      .post("api/houses/newlisting", {
        property_name,
        address,
        city,
        state,
        zip
      })
      .then(response => {
        this.setState({
          property_name: response.data,
          address: response.data,
          city: response.data,
          state: response.data,
          zip: response.data
        });
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
          {this.state.recommendedRent}
          <h4>Monthly Mortgage</h4>
          <input onChange={e => updateMonthlyMortgage(e)} />
          <h4>Desired Monthly Rent</h4>
          <input onChange={e => updateDesiredMonthlyRent(e)} />
          <Link to="/steptwo">
            <button>Previous Step</button>
          </Link>
          <Link to="/">
            <button onClick={() => this.componentWillMount()}>Complete</button>
          </Link>
        </div>
      </HashRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    monthly_mortgage: state.monthly_mortgage,
    desired_monthly_rent: state.desired_monthly_rent
  };
}

export default connect(
  mapStateToProps,
  {
    updateDesiredMonthlyRent,
    updateMonthlyMortgage
  }
)(StepThree);

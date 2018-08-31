import React, { Component } from "react";
import "./Dashboard.css";
import axios from "axios";
import { HashRouter, Link } from "react-router-dom";
import House from "../House/House";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      homes: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deleteListing = this.deleteListing.bind(this);
  }

  componentDidMount() {
    axios.get("/api/houses").then(response => {
      console.log(response);
      this.setState({
        homes: response.data
      });
    });
  }

  deleteListing(id) {
    axios.delete(`/api/houses/${id}`).then(req =>
      this.setState({
        homes: req.data
      })
    );
  }

  render() {
    return (
      <HashRouter>
        <div className="dashboard">
          <header className="header">
            <h1 className="title">Dashboard</h1>
            <Link to="/stepone" className="addNew">
              Add New Property
            </Link>
          </header>
          <hr className="linebreak" />

          <h3>Home Listings</h3>
          <div>
            <House properties={this.state.homes} delete={this.deleteListing} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

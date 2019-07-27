import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{resumeData.name1}</span>
              <br />
              <span>{resumeData.address}</span>
              <br />
              <span>{resumeData.website}</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

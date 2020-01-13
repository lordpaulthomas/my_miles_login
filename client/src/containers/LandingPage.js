import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

// import requireAuth from './../../hoc/requireAuth';

class LandingPage extends Component {

  render() {

    return (
      <div >
        Landing Page
      </div>
    );
  }
}

const formedComponent = compose(
  connect(null, { }),
  reduxForm({ form: 'landingPage' })
)(LandingPage);

export default formedComponent;

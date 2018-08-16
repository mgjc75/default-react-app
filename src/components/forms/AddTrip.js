import React, { Component } from "react";
import FormErrors from "../errors/FormErrors";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      ppl: "",
      cost: "",
      litres: "",
      mileage: "",
      trip: "",
      formErrors: {
        date: "",
        ppl: "",
        cost: "",
        litres: "",
        mileage: "",
        trip: ""
      },
      formValid: false
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <form>
            <div className="form-row p-2">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupDate">
                    Date
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationDate"
                  placeholder="date"
                  aria-describedby="inputGroupDate"
                  required
                  value={this.state.date}
                  onChange={event => this.handleUserInput(event)}
                />
              </div>
            </div>
            <div className="form-row p-2">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPpl">
                    £/ppl
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationPpl"
                  placeholder="£ Pence Per Litre"
                  aria-describedby="inputGroupPpl"
                  required
                  value={this.state.ppl}
                />
              </div>
            </div>
            <div className="form-row p-2">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputLitres">
                    L
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationLitres"
                  placeholder="litres"
                  aria-describedby="inputLitres"
                  required
                  value={this.state.litres}
                />
              </div>
            </div>
            <div className="form-row p-2">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupCost">
                    £
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationCost"
                  placeholder="£"
                  aria-describedby="inputGroupCost"
                  required
                  value={this.state.cost}
                />
              </div>
            </div>
            <div className="form-row p-2">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupMileage">
                    mileage
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationMileage"
                  placeholder="mileage"
                  aria-describedby="inputGroupMileage"
                  required
                  value={this.state.mileage}
                />
              </div>
            </div>
            <div className="form-row p-2">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupTrip">
                    Trip
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationTrip"
                  placeholder="trip"
                  aria-describedby="inputGroupTrip"
                  required
                  value={this.state.trip}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
        </div>
      </div>
    );
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "date":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }
}

export default componentName;

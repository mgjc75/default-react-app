import React, { Component } from "react";
import { FormErrors } from "../errors/FormErrors";

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
      formValid: false,
      dateValid: false,
      pplValid: false,
      costValid: false,
      litresValid: false,
      mileageValid: false,
      tripValid: false
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let dateValid = this.state.dateValid;
    let pplValid = this.state.pplValid;
    let litresValid = this.state.litresValid;
    let costValid = this.state.costValid;
    let mileageValid = this.state.mileageValid;
    let tripValid = this.state.tripValid;

    switch (fieldName) {
      case "date":
        dateValid = value.match(
          /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
        );
        fieldValidationErrors.date = dateValid ? "" : " is invalid";
        break;
      case "ppl":
        pplValid = value.match(/^(\d+\.\d{3})$/i);
        fieldValidationErrors.ppl = pplValid ? "" : " is invalid";
        break;
      case "cost":
        costValid = value.match(/^(\d{1,3}.\d{1,2})$/i);
        fieldValidationErrors.cost = costValid ? "" : " is invalid";
        break;
      case "litres":
        litresValid = value.match(/^(\d{1,2}.\d{1,2})$/i);
        fieldValidationErrors.litres = litresValid ? "" : " is invalid";
        break;
      case "mileage":
        mileageValid = value.match(/^(\d{1,6})$/i);
        fieldValidationErrors.mileage = mileageValid ? "" : " is invalid";
        break;
      case "trip":
        tripValid = value.match(/^(\d{1,3})$/i);
        fieldValidationErrors.trip = tripValid ? "" : " is invalid";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        dateValid: dateValid,
        pplValid: pplValid,
        litresValid: litresValid,
        costValid: costValid,
        mileageValid: mileageValid,
        tripValid: tripValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.dateValid });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <form>
            <div className="form-row p-2">
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.date
                )}`}
              >
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupDate">
                      Date
                    </span>
                  </div>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    placeholder="date"
                    aria-describedby="inputGroupDate"
                    required
                    value={this.state.date}
                    onChange={this.handleUserInput}
                  />
                </div>
              </div>
            </div>
            <div className="form-row p-2">
              <div className="has-error">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPpl">
                      £/ppl
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="ppl"
                    placeholder="£ Pence Per Litre"
                    aria-describedby="inputGroupPpl"
                    required
                    value={this.state.ppl}
                    onChange={this.handleUserInput}
                  />
                </div>
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
                  name="litres"
                  placeholder="litres"
                  aria-describedby="inputLitres"
                  required
                  value={this.state.litres}
                  onChange={this.handleUserInput}
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
                  name="cost"
                  placeholder="£"
                  aria-describedby="inputGroupCost"
                  required
                  value={this.state.cost}
                  onChange={this.handleUserInput}
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
                  name="mileage"
                  placeholder="mileage"
                  aria-describedby="inputGroupMileage"
                  required
                  value={this.state.mileage}
                  onChange={this.handleUserInput}
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
                  name="trip"
                  placeholder="trip"
                  aria-describedby="inputGroupTrip"
                  required
                  value={this.state.trip}
                  onChange={this.handleUserInput}
                />
              </div>
            </div>
            <div className="form-row p-2">
              <div className="input-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!this.state.formValid}
                >
                  Submit
                </button>
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
}

export default componentName;

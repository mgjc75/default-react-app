import React, { Component } from "react";

class componentName extends Component {
  render() {
    return (
      <form>
        <div className="form-row p-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend2">
                Date
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              placeholder="date"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div className="form-row p-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend2">
                £/ppl
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              placeholder="£ Pence Per Litre"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div className="form-row p-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend2">
                £
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              placeholder="£"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div className="form-row p-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend2">
                mileage
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              placeholder="mileage"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div className="form-row p-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend2">
                Trip
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              placeholder="trip"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
      </form>
    );
  }
}

export default componentName;

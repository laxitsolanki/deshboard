import React from "react";
import Button from "../../Components/Button";

const Editdrivergeolocation = () => {
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Edit Driver GeoLocation</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/viewdrivergeolocation"
          />
        </div>
      </div>
      <div class="row p-4 mt-5">
        <form className="p-4 mb-5 ">
          <div class="row">
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Date
              </label>
              <input type="date" class="form-control" />
            </div>
            <div class="col- col-md-6 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0 "
              >
                Driver
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Lat
              </label>
              <input type="number" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Long
              </label>
              <input type="number" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Company
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div className="row mt-4">
            <div class="col">
              <label for="formGroupExampleInput" className="fs-6 ">
                Address
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="form-control"
                style={{ height: "100px", resize: "none" }}
              ></textarea>
            </div>
          </div>
        </form>
        <div className="row mt-3 float-start">
          <div className="col d-flex">
            <div className="p-1">
              <Button name="Save" />
            </div>
            <div className="p-1">
              <Button name="Cancle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editdrivergeolocation;

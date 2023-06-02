import React, { useState } from "react";
import Button from "../../Components/Button";

const Edit = () => {
  const d = new Date();
  const currentdate = d.toISOString().substring(0,10);
  const currenttime = d.toISOString().substring(11,16);

  return (
    <div className="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Edit Company Profile</h2>
        </div>
        <div className="col-6">
          <Button
            link="/Viewcompany"
            name="Back"
            icon={<i className="fa-solid fa-arrow-left p-1"></i>}
          />
        </div>
      </div>
      <div class="row p-4 mt-5">
        <form className="p-4 mb-5">
          <div className="row">
            <div className="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Photo
              </label>
              <input type="file" className="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0 "
              >
                Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12 ">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Email Address
              </label>
              <input type="email" className="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Phone No
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Password
              </label>
              <input type="email" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Verification Code
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Uid
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                SocketId
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Status
              </label>
              <select name="" id="" className="form-select">
                <option value="Pending">pending</option>
                <option value="Success">success</option>
                <option value="Block">block</option>
              </select>
            </div>
          </div>
          <div class="row mt-5">
            <h3>UpdatedAt </h3>
            <div class="col- col-md-6 col-sm-12 mt-4">
              <label for="formGroupExampleInput" className="fs-6 ">
                Date
              </label>
              <input type="date" class="form-control" value={currentdate}/>
            </div>
            <div class="col- col-md-6 col-sm-12 mt-4">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Time
              </label>
              <input type="time" class="form-control" value={currenttime}/>
            </div>
          </div>
        </form>
        <div className="row mt-3 float-start">
          <div className="col d-flex">
            <div className="p-1">
              <Button name="Update" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;

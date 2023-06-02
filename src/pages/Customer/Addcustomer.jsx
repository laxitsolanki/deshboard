import React from "react";
import Button from "../../Components/Button";

const Addcustomer = () => {
  const d = new Date();
  const currentdate = d.toISOString().substring(0,10);
  const currenttime = d.toISOString().substring(11,16);

  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Add Customer</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/customer"
          />
        </div>
      </div>
      <div class="row p-4 mt-5">
        <form className="p-4 mb-5 ">
          <div class="row">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Photo
              </label>
              <input type="file" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0 "
              >
                Name
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12 ">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                PrimaryMobileNo
              </label>
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                SecondaryMobileNo
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Email Address
              </label>
              <input type="email" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                CompanyName
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                BirthDate
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
                <option value="">enable</option>
                <option value="">disable</option>
              </select>
            </div>
          </div>
          <div class="row mt-5">
            <h3>Current Address</h3>
            <div class="col mt-4">
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
          <div class="row mt-4">
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6 ">
                City
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-6 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Pincode
              </label>
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="row mt-5">
            <h3>CreatedAt</h3>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6 ">
                Date
              </label>
              <input type="date" class="form-control" value={currentdate}/>
            </div>
            <div class="col- col-md-6 col-sm-12">
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

export default Addcustomer;

import React from "react";
import Button from "../../Components/Button";

const Edittask = () => {
  const d = new Date();
  const currentdate = d.toISOString().substring(0,10);
  const currenttime = d.toISOString().substring(11,16);
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Edit Task Profile</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/viewtask"
          />
        </div>
      </div>
      <div class="row p-4 mt-5">
        <form className="p-4 mb-5 ">
          <div class="row">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Image
              </label>
              <input type="file" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0 "
              >
                Date
              </label>
              <input type="date" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12 ">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                TaskCategory
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Customer
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Site
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Driver
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Company
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-6 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                DueDate
              </label>
              <input type="date" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-6 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Notes
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Status
              </label>
              <select name="" id="" className="form-select">
                <option value="">pending</option>
                <option value="">current</option>
                <option value="">completed</option>
              </select>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-12 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Description
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                className="form-control"
                style={{ resize: "none", height: "100px" }}
              ></textarea>
            </div>
          </div>
          <div class="row mt-5">
            <h3>UpdatedAt</h3>
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

export default Edittask;

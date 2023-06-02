import React from 'react'
import Button from '../../Components/Button'

const Editexpense = () => {
  const d = new Date();
  const currentdate = d.toISOString().substring(0,10);
  const currenttime = d.toISOString().substring(11,16);
  return (
    <div class="container- px-3 mt-5">
    <div className="row p-4">
      <div className="col-6">
        <h2>Edit Expense Profile</h2>
      </div>
      <div className="col-6">
        <Button
          name="Back"
          icon={<i class="fa-solid fa-arrow-left"></i>}
          link="/viewexpense"
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
            <input type="File" class="form-control" />
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
              ExpenseCategory
            </label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col- col-md-6 col-sm-12">
            <label for="formGroupExampleInput" className="fs-6">
              Amount
            </label>
            <input type="number" class="form-control" />
          </div>
          <div class="col- col-md-6 col-sm-12">
            <label for="formGroupExampleInput" className="fs-6">
              Company
            </label>
            <input type="text" class="form-control" />
          </div>
          
        </div>
        <div class="row mt-4">
          <div class="col- col-md-6 col-sm-12">
            <label for="formGroupExampleInput" className="fs-6">
              Driver
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="col- col-md-6 col-sm-12">
            <label
              for="formGroupExampleInput"
              className="fs-6 mt-sm-4 mt-md-0 "
            >
              Status
            </label>
            <select name="" id="" className="form-select">
              <option value="">enable</option>
              <option value="">disable</option>
            </select>
          </div>
          
        </div>
        <div class="row mt-4">
          <div class="col- col-md-6 col-sm-12">
            <label for="formGroupExampleInput" className="fs-6">
              Description
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
          <div class="col- col-md-6 col-sm-12">
            <label for="formGroupExampleInput" className="fs-6">
              RejectedNote
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
        <div class="row mt-5">
          <h3>UpdatedAt</h3>
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
            <Button name="Save" />
          </div>
          <div className="p-1">
            <Button name="Cancle" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Editexpense

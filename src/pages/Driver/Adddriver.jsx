import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { useState } from "react";
const Adddriver = () => {

  const [file, setFile] = useState();

  const handlefile =(e)=>{
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const d = new Date();
  const currentdate = d.toISOString().substring(0,10);
  const currenttime = d.toISOString().substring(11,16);
  console.log(currenttime)
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Add Driver</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/driver"
          />
        </div>
      </div>
      <div class="row p-4 mt-5">
        <div className="col-2 d-flex justify-content-center">
          <img src={file} width={100} alt="" />
        </div>
        <form className="p-4 mb-5 ">
          <div class="row">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Photo
              </label>
              <input type="file" class="form-control" onChange={handlefile}/>
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
                Mobile No
              </label>
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Vehicle
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
                Staff No
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6 ">
                Gander
              </label>
              <select name="" id="" class="form-select">
                <option value="Male">Male</option>
                <option value="Femail">Femail</option>
              </select>
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Marital Status
              </label>
              <select name="" id="" class="form-select">
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Blood Group{" "}
              </label>
              <select name="" id="" class="form-select">
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6 ">
                BirthDate
              </label>
              <input type="date" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Aadhar No
              </label>
              <input type="number" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                AadharCard Photo
              </label>
              <input type="file" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                DrivingLicense No
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-6 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Licence Type
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6 ">
                License ExpiryDate
              </label>
              <input type="date" class="form-control" />
            </div>
            <div class="col- col-md-6 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                DrivingLicense Photo
              </label>
              <input type="file" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                otp
              </label>
              <input type="number" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                company
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                status
              </label>
              <select name="" id="" class="form-select">
                <option value="enable">enable</option>
                <option value="disable">disable</option>
              </select>
            </div>
          </div>
          <div class="row mt-5">
            <h3>Permanent Address</h3>
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
            <h3>Bank Details</h3>
            <div class="col- col-md-6 col-sm-12 mt-3">
              <label for="formGroupExampleInput" className="fs-6">
                Account Number
              </label>
              <input type="number" class="form-control" />
            </div>
            <div class="col- col-md-6 col-sm-12 mt-3">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                AC Name
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6 ">
                Ifsc Code
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-6 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Upi ID
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mt-5">
            <h3>lastAttendance</h3>
            <div class="col- col-md-4 col-sm-12 mt-3">
              <label for="formGroupExampleInput" className="fs-6 ">
                Date
              </label>
              <input type="date" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12 mt-3">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                PunchInTime
              </label>
              <input type="time" class="form-control" />
            </div>
            <div class="col- col-md-4 col-sm-12 mt-3">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                PunchOutTime{" "}
              </label>
              <input type="time" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-4 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6 ">
                Total Working Hours
              </label>
              <input type="number" class="form-control" />
            </div>

            <div class="col- col-md-4 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                Status{" "}
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mt-5">
            <h3>Last Location</h3>
            <div class="col- col-md-6 col-sm-12 mt-4">
              <label for="formGroupExampleInput" className="fs-6 ">
                lat
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-6 col-sm-12 mt-4">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0"
              >
                long
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
          <div class="row mt-5">
            <h3>CreatedAt</h3>
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
  );
};

export default Adddriver;

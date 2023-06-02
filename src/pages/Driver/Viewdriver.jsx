import React from "react";
import Button from "../../Components/Button";

const Viewdriver = () => {
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Driver Profile</h2>
        </div>
        <div className="col-6">
          <Button name="Back" link="/driver" icon={<i class="fa-solid fa-arrow-left p-1"></i>}/>
        </div>
      </div>
      <div className="view">
        <div className="viewLeft">
          <img
            src={require("../../assets/images/teacher-2.jpg")}
            alt="Logo"
            width={150}
          />
          <div className="info">
            <h1>Name</h1>
            <p>denish.prolink@gmail.com</p>
            <p>+91 83200 55998</p>
            <p>Gender</p>
            <p>MaritalStatus</p>
            <p>BloodGroup</p>
            <p>BirthDate</p>
          </div>
        </div>
        <div className="viewRight">
          <div className="d-sm-flex justify-content-evenly mb-4 sub_section">
            <h3>Company</h3>
            <h3>StaffNo</h3>
          </div>
          <div className="view sub_section">
            <div className="addLeft">
              <p>Vehicle</p>
              <p>AadharNo</p>
              <p>DrivingLicenseNo</p>
              <p>LicenceType</p>
              <p>LicenseExpiryDate</p>
            </div>
            <div className="addRight">
              <p>CreatedAt</p>
              <p>UpdatedAt</p>
              <div className="view">
                <div className="addLeft" >
                  <img
                    className="w-25 border-black border-3 border"
                    src={require("../../assets/images/teacher-2.jpg")}
                    alt="aadharCardPhoto"
                  />
                  <p style={{marginLeft:'-50px'}}>AadharCardPhoto</p>
                </div>
                <div className="addRight">
                  <img
                    className="w-25 border-black border-3 border"
                    src={require("../../assets/images/teacher-2.jpg")}
                    alt="aadharCardPhoto"
                  />
                  <p style={{marginLeft:'-50px'}}>AadharCardPhoto</p>
                </div>
              </div>
            </div>
          </div>
          <div className="view sub_section">
            <div className="addLeft">
              <h3>BankDetails</h3>
              <p>AccountNo</p>
              <p>AcName</p>
              <p>IfscCode</p>
              <p>UpiId</p>
            </div>
          </div>
          <div className="view sub_section">
            <div className="addLeft">
              <h3>Permanent Address</h3>
              <p>Address</p>
              <p>City</p>
              <p>Pincode</p>
            </div>
            <div className="addRight">
              <div className="add-left">
                <h3>Current Address</h3>
                <p>Address</p>
                <p>City</p>
                <p>Pincode</p>
              </div>
            </div>
          </div>

          <div className=" view sub_section">
            <div className="addLeft">
              <h3>LastAttendance</h3>
              <p>Date</p>
              <p>PunchInTime</p>
              <p>PunchOutTime</p>
              <p>TotalWorkingHours</p>
              <p>Photo</p>
              {/* <p>status</p> */}
            </div>
            <div className="addRight">
              <div className="add-left">
                <h3>LastLocation</h3>
                <p>Lat</p>
                <p>Long</p>
                <p>Address</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-4">
        <div className="col d-flex">
          <div className="p-1">
            <Button
              name="Edit"
              link="/editdriver"
              icon={<i class="fa-regular fa-pen-to-square p-1"></i>}
            />
          </div>
          <div className="p-1">
            <Button
              Actionbtn="Delete"
              icon={<i class="fa-sharp fa-solid fa-trash p-1"></i>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewdriver;

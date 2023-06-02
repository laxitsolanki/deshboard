import React from "react";
import Button from "../../Components/Button";

const Viewcustomer = () => {
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Customer Profile</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            link="/customer"
            icon={<i class="fa-solid fa-arrow-left p-1"></i>}
          />
        </div>
      </div>
      <div className="view">
        <div className="viewLeft">
          <img
            src={require("../../assets/images/teacher-2.jpg")}
            alt="Logo"
            width={150}
          />
        </div>
        <div className="viewRight">
          <div className="d-sm-flex justify-content-evenly mb-4 sub_section"></div>
          <div className="view sub_section">
            <div className="addLeft">
              <p>Name</p>
              <p>PrimaryMobileNo</p>
              <p>SecondaryMobileNo</p>
              <p>EmailAddress</p>
              <p>BirthDate</p>
              <p>Company</p>
              <p>Status</p>
            </div>
            <div className="addRight">
              <p>CreatedAt</p>
              <p>UpdatedAt</p>
            </div>
          </div>
          <div className="view sub_section">
            <div className="addRight">
              <div className="add-left">
                <h3>Current Address</h3>
                <p>Address</p>
                <p>City</p>
                <p>Pincode</p>
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
              link="/editcustomer"
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

export default Viewcustomer;

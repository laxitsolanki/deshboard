import React from "react";
import Button from "../../Components/Button";

const Viewleadcategory = () => {
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>LeadCategory Profile</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            link="/leadcategory"
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
        <div className="viewRight ">
          <div className="d-sm-flex justify-content-evenly mb-4 sub_section"></div>
          <div className="view sub_section">
            <div className="addLeft">
              <p>Name</p>
              <p>Color</p>
              <p>Company</p>
              <p>Status</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-4">
        <div className="col d-flex">
          <div className="p-1">
            <Button
              name="Edit"
              link="/editleadcategory"
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

export default Viewleadcategory;

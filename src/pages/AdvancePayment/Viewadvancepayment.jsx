import React from "react";
import Button from "../../Components/Button";

const Viewadvancepayment = () => {
  return (
    <div className="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Advance Payment Profile</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            link="/advancepayment"
            icon={<i className="fa-solid fa-arrow-left p-1"></i>}
          />
        </div>
      </div>
      <div className="view d-flex justify-content-center">
        <div className="viewRight">
          <div className="d-sm-flex justify-content-evenly mb-4 sub_section"></div>
          <div className="view sub_section">
            <div className="addLeft">
              <p>Date</p>
              <p>Customer</p>
              <p>Driver</p>
              <p>Company</p>
              <p>Amount</p>
              <p>Notes</p>
            </div>
            <div className="addRight">
              <p>CreatedAt</p>
              <p>UpdatedAt</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-4">
        <div className="col d-flex">
          <div className="p-1">
            <Button
              name="Edit"
              link="/editadvancepayment"
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

export default Viewadvancepayment;

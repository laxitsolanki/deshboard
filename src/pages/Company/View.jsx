import React from "react";
import Button from "../../Components/Button";

const View = () => {
  return (
    <div className="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Company Profile</h2>
        </div>
        <div className="col-6">
          <Button name="Back" link="/company" icon={<i className="fa-solid fa-arrow-left p-1"></i>}/>
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
          <div className="d-sm-flex justify-content-evenly mb-4 sub_section">
          </div>
          <div className="view sub_section">
            <div className="addLeft">
              <p>Name</p>
              <p>EmailAddress</p>
              <p>PhoneNo</p>
              <p>VerificationCode</p>
              <p>Uid</p>
              <p>Status</p>
              <p>SocketId</p>
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
              link="/edit"
              icon={<i className="fa-regular fa-pen-to-square p-1"></i>}
            />
          </div>
          <div className="p-1">
            <Button
              Actionbtn="Delete"
              icon={<i className="fa-sharp fa-solid fa-trash p-1"></i>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;

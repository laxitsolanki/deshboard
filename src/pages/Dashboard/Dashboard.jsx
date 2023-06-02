import React from "react";
import { api } from "../../helper/api";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [district, setDistrict] = useState([]);


  const District = async () => {
    let response = await api("master/district");
    if (response && response.status === 200) {
      setDistrict(response.data.total_records);
    } else {
      alert("error");
    }
  };

  

  useEffect(() => {
    District();

  }, []);

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-md-3 col-sm-4 py-5 m-3 box ">
              <p className="text-center">District</p>
              {<span className="span text-center">{district}</span>}
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box ">
              <p className="text-center">taluko</p>
              {<span className="span text-center">{district}</span>}
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box ">
              <p className="text-center">Zonne</p>
              {<span className="span text-center">0</span>}
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box ">
              <p className="text-center">Business_type</p>
              {<span className="span text-center">0</span>}
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Powersupply</p>
              <span className="span text-center">0</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Associaton</p>
              <span className="span text-center">0</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Member</p>
              <span className="span text-center">0</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">User</p>
              <span className="span text-center">0</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Driver</p>
              <span className="span text-center">0</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Customer</p>
              <span className="span text-center">0</span>
            </div>

            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Task</p>
              <span className="span text-center">0</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">TaskCategory</p>
              <span className="span text-center">0</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Lead</p>
              <span className="span text-center">0</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">LeadCategory</p>
              <span className="span text-center">0</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Expense</p>
              <span className="span text-center">0</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">ExpenseCategory</p>
              <span className="span text-center">0</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Site</p>
              <span className="span text-center">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

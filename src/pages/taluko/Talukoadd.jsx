import React from 'react'
import { useState , useEffect } from 'react';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer_two';
import { api } from '../../helper/api';
import { resetError , showError } from '../../helper/error';
import Joi from 'joi';


const Talukoadd = () => {
    const [name, setName] = useState("");
    let [district, setDistrict] = useState("");
    let [districtList, setDistrictList] = useState([]);
    let [error, setError] = useState({});
  
    const validate = (data) => {
      const schema = Joi.object({
        name: Joi.string().max(100).required().label("Name"),
        district: Joi.string().hex().length(24).label("District"),
      });
      return schema.validate(data, { abortEarly: false, allowUnknown: true });
    };
  
    const add = async () => {
      resetError();
  
      let data = {
        name: name,
        district: district,
      };
  
      const { error } = validate(data);
      if (error) return showError(error.details);
  
      let response = await api("master/taluka/add", data);
      if (response && response.status === 200) {
        setName("");
        setDistrict("");
      } else {
        alert("error");
      }
    };
  
    const fetchdata = async () => {
      const response = await api("master/taluka");
      console.log(response);
      if (response && response.status === 200) {
        setDistrictList(response.data.master.districts);
      }
    };
  
    useEffect(() => {
      fetchdata();
    }, []);
  return (
    <div class="container- px-3 mt-5">
    <div className="row p-4">
      <div className="col-6">
        <h2>Add Taluka</h2>
      </div>
      <div className="col-6">
        <Button
          name="Back"
          icon={<i class="fa-solid fa-arrow-left"></i>}
          link="/Talukolist"
        />
      </div>
    </div>

    <div class="row p-4 mt-5 d-flex justify-content-center align-items-center">
        <form className="p-4 mb-5">
          <div class="row">
            <div class="col- col-md-6">
              <label for="formGroupExampleInput" className="fs-6">
                Name
              </label>
              <input
                type="text"
                name=""
                id="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div class="col- col-md-6">
              <label for="formGroupExampleInput" className="fs-6">
                District
              </label>
              <select
                name=""
                id="district"
                className="form-select"
                onChange={(e) => setDistrict(e.target.value)}
                value={district}
              >
                <option value="" disabled>
                  Select District
                </option>

                {districtList.map((item) => {
                  return (
                    <>
                      <option value={item._id}>{item.name}</option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>
        </form>
        <Footer add={add} />
      </div>
    </div>

  )
}

export default Talukoadd;

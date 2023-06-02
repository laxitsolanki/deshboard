import React from 'react'
import Button from '../../Components/Button'
import { api } from '../../helper/api'
import Footer from '../../Components/Footer_two'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { resetError ,showError } from '../../helper/error'
import Joi from 'joi'


const Useradd = () => {
    let [name, setName] = useState("");
    let [email_id, setEmail_id] = useState("");
    let [mobile_no, setMobile_no] = useState("");
    let [error, setError] = useState({});
  
    const navigate = useNavigate();
  
    const validate = (data) => {
      const schema = Joi.object({
        name: Joi.string().max(100).required().label("Name"),
        email_id: Joi.string()
          .email({ tlds: { allow: false } })
          .required()
          .label("Email id"),
        mobile_no: Joi.string().min(10).max(11).label("Mobile no"),
      });
      return schema.validate(data, { abortEarly: false, allowUnknown: true });
    };
  
    const saveHandler = async () => {
      resetError();
  
      let data = {
        name: name,
        email_id: email_id,
        mobile_no: mobile_no,
      };
  
      const { error } = validate(data);
      if (error) return showError(error.details);
  
      let response = await api("user/add", data);
      console.log(response);
      if (response && response.status === 200) {
        setName("");
        setEmail_id("");
        setMobile_no("");
      } else {
        alert("error");
      }
    };
  
    const canclehandler = () => {
      navigate("/Userlist");
    };
  return (
    <div class="container- px-3 mt-5">
    <div className="row p-4">
      <div className="col-6">
        <h2>Add User</h2>
      </div>
      <div className="col-6">
        <Button
          name="Back"
          icon={<i class="fa-solid fa-arrow-left"></i>}
          link="/Userlist"
        />
      </div>
    </div>
    <div class="row p-4 mt-5 d-flex justify-content-center align-items-center">
      <form className="p-4 mb-5">
        <div class="row">
          <div class="col- col-md-6 ">
            <label for="formGroupExampleInput" className="fs-6">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {error?.name && <span className="error">{error["name"]}</span>}
          </div>
          <div class="col- col-md-6 ">
            <label for="formGroupExampleInput" className="fs-6">
              Email-id
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail_id(e.target.value)}
              value={email_id}
              id="email_id"
            />
            {error?.name && (
              <span className="error">{error["email_id"]}</span>
            )}
          </div>
        </div>
        <div class="row  mt-3">
          <div class="col-12">
            <label for="formGroupExampleInput" className="fs-6">
              Mobile-no
            </label>
            <input
              type="number"
              id="mobile_no"
              className="form-control"
              onChange={(e) => setMobile_no(e.target.value)}
              value={mobile_no}
            />
            {error?.name && (
              <span className="error">{error["mobile_no"]}</span>
            )}
          </div>
        </div>
      </form>
      <Footer add={saveHandler} cancle={canclehandler} />
    </div>
  </div>
  )
}

export default Useradd

import React from 'react'
import Button from '../../Components/Button'
import Footer from '../../Components/Footer_two'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../helper/api'
import { resetError, showError } from '../../helper/error'
import Joi from 'joi'

const Powersupplyadd = () => {
    const [name, setName] = useState("");
  let [error, setError] = useState({});

  const navigate=useNavigate();

  const validate = (data) => {
    const schema = Joi.object({
      name: Joi.string().max(100).required().label("Name"),
    });
    return schema.validate(data, { abortEarly: false, allowUnknown: true });
  };


  const saveHandler =async()=>{
    resetError();

    let data = {
      name: name,
    };

    const { error } = validate(data);
    if (error) return showError(error.details);

    let response = await api("master/power_supply/add", data);
    console.log(response);
    if (response && response.status === 200) {
      setName('')
    } else {
      alert("error");
    }
  };

  const canclehandler = () => {
    navigate('/Powersupplylist')
  };

  return (
<div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Add Power Supply</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/Powersupplylist"
          />
        </div>
      </div>
      <div class="row p-4 mt-5 d-flex justify-content-center align-items-center">
        <form className="p-4 mb-5">
          <div class="row">
            <div class="col-12">
              <label for="formGroupExampleInput" className="fs-6">
                Name
              </label>
              <input type="text" id='name' className="form-control" autoFocus onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
          </div>
        </form>
        <Footer add={saveHandler} cancle={canclehandler}/>
      </div>
    </div>
  )
}

export default Powersupplyadd

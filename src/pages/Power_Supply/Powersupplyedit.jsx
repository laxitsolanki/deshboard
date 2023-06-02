import React from 'react'
import Button from '../../Components/Button'
import Footer from '../../Components/Footer_two'
import { useNavigate , useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import { api } from '../../helper/api'

const Powersupplyedit = () => {
    let power_supply = useParams();
    let [name, setName] = useState("");
    const navigate = useNavigate();
  
    const fetchdata = async () => {
      let data = {
        _id: power_supply.id,
      };
  
      const response = await api("master/power_supply/view", data);
      if (response && response.status === 200) {
        setName(response.data.data.name);
      }
    };
  
    useEffect(() => {
      fetchdata();
    }, []);
  
    const saveHandler = async () => {
      let data = {
        _id: power_supply.id,
        name: name,
      };
  
      let response = await api("master/power_supply/edit", data);
      if (response && response.status === 200) {
        navigate(`/Powersupplyview/${power_supply.id}`);
      } else alert("error");
    };
  
    const canclehandler = () => {
      navigate(`/Powersupplyview/${power_supply.id}`);
    };
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Edit Power Supply</h2>
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
              <input
                type="text"
                className="form-control"
                autoFocus
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
        </form>
        <Footer add={saveHandler} cancle={canclehandler} />
      </div>
    </div>
  )
}

export default Powersupplyedit

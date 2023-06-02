import React from 'react'
import Button from '../../Components/Button'
import Footer from '../../Components/Footer_two'
import {useState , useEffect } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import { api } from '../../helper/api'


const Zoneedit = () => {
    let zone = useParams();
  let [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchdata = async () => {
    let data = {
      _id: zone.id,
    };

    const response = await api("master/zone/view", data);
    if (response && response.status === 200) {
      setName(response.data.data.name);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const saveHandler = async () => {
    let data = {
      _id: zone.id,
      name: name,
    };

    let response = await api("master/zone/edit", data);
    if (response && response.status === 200) {
      navigate(`/Zoneview/${zone.id}`);
    } else alert("error");
  };

  const canclehandler = () => {
    navigate(`/Zoneview/${zone.id}`)
  };
  return (
    <div class="container- px-3 mt-5">
    <div className="row p-4">
      <div className="col-6">
        <h2>Edit Zone</h2>
      </div>
      <div className="col-6">
        <Button
          name="Back"
          icon={<i class="fa-solid fa-arrow-left"></i>}
          link="/Zonelist"
        />
      </div>
    </div>
    <div class="row p-4 mt-5 d-flex justify-content-center align-items-center">
      <form className="p-4 mb-5">
        <div class="row">
          <div class="col-6">
            <label for="formGroupExampleInput" className="fs-6">
              Zone
            </label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </div>
      </form>
      <Footer  add={saveHandler} cancle={canclehandler}/>
    </div>
  </div>
  )
}

export default Zoneedit

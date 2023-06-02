import React from 'react'
import Button from '../../Components/Button'
import Footer from '../../Components/Footer_two'
import { useState , useEffect } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import { api } from '../../helper/api'
const Talukoedit = () => {
// usestate
  let taluka = useParams();
  let [name, setName] = useState("");
  let [district, setDistrict] = useState("");
  let [districtList, setDistrictList] = useState([]);
  const navigate = useNavigate();

  const fetchDistrictdata = async () => {
    const response = await api("master/taluka");
    if (response && response.status === 200) {
      setDistrictList(response.data.master.districts);
    }
  };

  const fetchdata = async () => {
    let data = {
      _id: taluka.id,
    };
    //api call 
    const response = await api("master/taluka/view", data);

    if (response && response.status === 200) {
      setName(response.data.data.name);
      setDistrict(response.data.data.district?._id);
    }
  };
  const saveHandler = async () => {
    let data = {
      _id: taluka.id,
      name: name,
      district: district,
    };

    let response = await api("master/taluka/edit", data);
    if (response && response.status === 200) {
      navigate(`/Talukoview/${taluka.id}`);
    }
  };

  useEffect(() => {
    fetchDistrictdata();
    fetchdata();
  }, []);


  return (
    <div class="container- px-3 mt-5">
    <div className="row p-4">
      <div className="col-6">
        <h2>Edit Taluka</h2>
      </div>
      <div className="col-6">
        <Button
          name="Back"
          icon={<i class="fa-solid fa-arrow-left"></i>}
          link="/talukalist"
        />
      </div>
    </div>
    <div class="row p-4 mt-5 d-flex justify-content-center align-items-center">
        <form className="p-4 mb-5">
          <div class="row">
            <div class="col-6">
              <label for="formGroupExampleInput" className="fs-6">
                Taluka
              </label>
              <input
                type="text"
                name="name"
                id=""
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div class="col-6">
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
                  return <option value={item._id}>{item.name}</option>;
                })}
              </select>
            </div>
          </div>
        </form>
        <Footer add={saveHandler} />
      </div>
    </div>
  )
}

export default Talukoedit

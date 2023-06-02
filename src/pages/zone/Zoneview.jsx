import React from 'react'
import { useState, useEffect } from 'react'
import Button from '../../Components/Button'
import { api } from '../../helper/api'
import { useNavigate ,useParams } from 'react-router-dom'
import Footer from '../../Components/Footer_two'
import { TfiCheckBox } from "react-icons/tfi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";


const Zoneview = () => {
    const [zone, setZone] = useState([]);
    const parms = useParams();
    const navigate = useNavigate();
  
    const deletezone = async () => {
      const data = {
        _id: parms.id,
      };
  
      let response = await api("master/zone/delete", data);
      if (response && response.status === 200) {
        navigate("/zonelist");
      } else {
        alert("error");
      }
    };
  
    useEffect(() => {
      const fetchdata = async (id) => {
        let data = {
          _id: parms.id,
        };
  
        const response = await api("master/zone/view", data);
  
        if (response && response.status === 200) {
          setZone(response.data.data);
        }
      };
      fetchdata();
    }, []);
  
  return (
<div class="container- px-3 mt-5">
        <div className="row p-4">
          <div className="col-6">
            <h2>View Zone</h2>
          </div>
          <div className="col-6">
            <Button
              name="Edit"
              link={`/Zoneedit/${parms.id}`}
              icon={<i class="fa-regular fa-pen-to-square p-1"></i>}
              style={{ marginLeft: "20px" }}
            />
            <Button
              name="Back"
              link="/Zonelist"
              icon={<i class="fa-solid fa-arrow-left p-1"></i>}
            />
          </div>
          <div className="container-fluid" style={{ marginTop: "60px" }}>
            <div className="row">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-md-3 col-sm-4 py-5 m-3 box ">
                  <p
                    className="text-center"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Zone Name
                  </p>
                  {<span className="span text-center">{zone.name}</span>}
                  <p
                    className="text-center"
                    style={{ color: "black", fontWeight: "bold",marginTop:'20px' }}
                  >
                    Status
                  </p>
                  {zone.status === true ? <TfiCheckBox className='text-lg font-extrabold' /> : <MdCheckBoxOutlineBlank />}
                </div>
              </div>
            </div>
          </div>
          <Footer delete={deletezone} />
        </div>
      </div>
  )
}

export default Zoneview

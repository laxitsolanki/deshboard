import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import { api } from "../../helper/api";
import Footer from "../../Components/Footer_two";

const Editdistrict = () => {
  let district = useParams();
  let [name, setName] = useState("");
  const navigate = useNavigate();

  let districtname = [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udaipur",
    "Dahod",
    "Dang",
    "Devbhoomi Dwarka",
    "Gandhinagar",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kheda",
    "Kutch",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad",
  ];

  const fetchdata = async () => {
    let data = {
      _id: district.id,
    };

    const response = await api("master/district/view", data);
    if (response && response.status === 200) {
      setName(response.data.data.name);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const saveHandler = async () => {
    let data = {
      _id: district.id,
      name: name,
    };

    let response = await api("master/district/edit", data);
    if (response && response.status === 200) {
      navigate(`/viewdistrict/${district.id}`);
    } else alert("error");
  };

  const canclehandler = () => {
    navigate(`/viewdistrict/${district.id}`)
  };

  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Edit District</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/districtlist"
          />
        </div>
      </div>
      <div class="row p-4 mt-5 d-flex justify-content-center align-items-center">
        <form className="p-4 mb-5">
          <div class="row">
            <div class="col-12">
              <label for="formGroupExampleInput" className="fs-6">
                District
              </label>
              <select
                name=""
                id=""
                className="form-select"
                value={name}
                onChange={(e) => setName(e.target.value)}
              >
                {districtname.map((name) => {
                  return <option value={name}>{name}</option>;
                })}
              </select>
            </div>
          </div>
        </form>
        <Footer add={saveHandler} cancle={canclehandler}/>
      </div>
    </div>
  );
};

export default Editdistrict;

import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { api } from "../../helper/api";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Footer";

const Viewvehicle = () => {
  const [district, setDistrict] = useState([]);
  const parms = useParams();
  const navigate = useNavigate();

  const deletedistrict = async () => {
    const data = {
      _id: parms.id,
    };

    let response = await api("master/district/delete", data);
    if (response && response.status === 200) {
      navigate("/districtlist");
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    const fetchdata = async (id) => {
      let data = {
        _id: parms.id,
      };

      const response = await api("master/district/view", data);

      if (response && response.status === 200) {
        setDistrict(response.data.data);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <div class="container- px-3 mt-5">
        <div className="row p-4">
          <div className="col-6">
            <h2>View District</h2>
          </div>
          <div className="col-6">
            <Button
              name="Edit"
              link={`/editdistrict/${parms.id}`}
              icon={<i class="fa-regular fa-pen-to-square p-1"></i>}
              style={{ marginLeft: "20px" }}
            />
            <Button
              name="Back"
              link="/districtlist"
              icon={<i class="fa-solid fa-arrow-left p-1"></i>}
            />
          </div>
          <div className="container-fluid" style={{marginTop:'60px'}}>
            <div className="row">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-md-3 col-sm-4 py-5 m-3 box ">
                  <p
                    className="text-center"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    District Name
                  </p>
                  {<span className="span text-center">{district.name}</span>}
                </div>
              </div>
            </div>
          </div>
          <Footer delete={deletedistrict}/>
        </div>
      </div>
    </>
  );
};

export default Viewvehicle;

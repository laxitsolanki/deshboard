import React from 'react'
import Button from '../../Components/Button'
import { api } from '../../helper/api'
import Footer from '../../Components/Footer_two'
import { useNavigate, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'

const Businesstypeedit = () => {
  let business_type = useParams();
  let [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchdata = async () => {
    let data = {
      _id: business_type.id,
    };

    const response = await api("master/business_type/view", data);
    if (response && response.status === 200) {
      setName(response.data.data.name);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const saveHandler = async () => {
    let data = {
      _id: business_type.id,
      name: name,
    };

    let response = await api("master/business_type/edit", data);
    if (response && response.status === 200) {
      navigate(`/Businesstypeview/${business_type.id}`);
    } else alert("error");
  };

  const canclehandler = () => {
    navigate(`/Businesstypeview/${business_type.id}`)
  };

  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Add Business Type</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/Businesstypelist"
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
              <input type="text" className="form-control" autoFocus onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
          </div>
        </form>
        <Footer add={saveHandler} cancle={canclehandler}/>
      </div>
    </div>
  )
}

export default Businesstypeedit

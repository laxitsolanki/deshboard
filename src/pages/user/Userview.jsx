import React from 'react'
import { useEffect ,useState } from 'react'
import Button from '../../Components/Button'
import Footer from '../../Components/Footer_two'
import { api } from '../../helper/api'
import { useParams ,useNavigate } from 'react-router-dom'
import { TfiCheckBox } from "react-icons/tfi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Userview = () => {
    const parms = useParams();
  let [user, setUser] = useState([]);
  const navigate = useNavigate();

  const deleteHandler = async () => {
    const data = {
      _id: parms.id,
    };

    let response = await api("user/remove", data);
    if (response && response.status === 200) {
      navigate("/Userlist");
    } else {
      alert("error");
    }
  };

  const fetchdata = async () => {
    let data = {
      _id: parms.id,
    };

    const response = await api("user/view", data);

    if (response && response.status === 200) {
      setUser(response.data.data);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [parms.id]);

  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>View User</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            link="/Userlist"
            icon={<i class="fa-solid fa-arrow-left p-1"></i>}
          />
        </div>
        <div className="container-fluid" style={{ marginTop: "60px" }}>
          <div className="row">
            <div className="row d-flex justify-content-center ">
              <div className="col-md-3 col-sm-4 py-4 m-3 box" style={{width:'490px'}}>
                <table class="table table-borderless">
                  <tbody className="fs-5">
                    <tr>
                      <td>User Name</td>
                      <td>:</td>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <td>Email-id</td>
                      <td>:</td>
                      <td>{user.email_id}</td>
                    </tr>
                    <tr>
                      <td>Mobile-no</td>
                      <td>:</td>
                      <td>{user.mobile_no}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>:</td>
                      <td>
                        {user.status === true ? (
                          <TfiCheckBox className="text-lg font-extrabold" />
                        ) : (
                          <MdCheckBoxOutlineBlank />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer delete={deleteHandler} />
      </div>
    </div>
  )
}

export default Userview

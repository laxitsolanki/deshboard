import React from 'react'
import Button from '../../Components/Button'
import { useState , useEffect } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import { api } from '../../helper/api'

const Associationlist = () => {
  let [association, setAssociation] = useState([]);
  let parms = useParams();

  const fetchdata = async () => {
    let data = {};
    const response = await api("association/view", data);

    if (response && response.status === 200) {
      setAssociation(response.data);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>View Association</h2>
        </div>
        <div className="col-6">
          <Button
            name="Edit"
            link={`/Associationedit/${association.data?.association[0]?._id}`}
            icon={<i class="fa-regular fa-pen-to-square p-1"></i>}
            style={{ marginLeft: "20px" }}
          />
        </div>
        <div className="container-fluid" style={{ marginTop: "60px" }}>
          <div className="row">
            <div className="row ">
              <div className="col-md-3 col-sm-4 py-4 m-3 box w-75">
                <table class="table table-borderless">
                  <tbody className="fs-5">
                    <tr>
                      <td className="w-36">Name</td>
                      <td>:</td>
                      <td>{association.data?.association[0]?.name}</td>
                    </tr>
                    <tr>
                      <td className="w-36">Email ID</td>
                      <td>:</td>
                      <td>{association.data?.association[0]?.email_id}</td>
                    </tr>
                    <tr>
                      <td className="w-36">Phone No.</td>
                      <td>:</td>
                      <td>{association.data?.association[0]?.phone_no}</td>
                    </tr>
                    <tr>
                      <td className="w-36" style={{ fontSize: "25px" }}>
                        <b>Address</b>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-36">Address-line-1</td>
                      <td>:</td>
                      <td>
                        {
                          association.data?.association[0]?.address
                            ?.address_line_2
                        }
                      </td>
                    </tr>
                    <tr>
                      <td className="w-36">Address-line-2</td>
                      <td>:</td>
                      <td>
                        {
                          association.data?.association[0]?.address
                            ?.address_line_1
                        }
                      </td>
                    </tr>
                    <tr>
                      <td className="w-36">Pincode</td>
                      <td>:</td>
                      <td>
                        {association.data?.association[0]?.address?.pincode}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-36">City</td>
                      <td>:</td>
                      <td>{association.data?.association[0]?.address?.city}</td>
                    </tr>
                    <tr>
                      <td className="w-36">Taluka</td>
                      <td>:</td>
                      <td>{association.data?.master?.taluka[0]?.name}</td>
                    </tr>
                    <tr>
                      <td className="w-36">District</td>
                      <td>:</td>
                      <td>{association.data?.master?.district[0]?.name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Associationlist

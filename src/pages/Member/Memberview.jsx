import React ,{useState ,useEffect} from 'react'
import Button from '../../Components/Button'
import { useNavigate , useParams } from 'react-router-dom'
import Footer from '../../Components/Footer_two'
import { api } from '../../helper/api'
import { RiCloseCircleFill } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";
import moment from "moment";

const Memberview = () => {
  let params = useParams();
  let [member, setMember] = useState([]);
  const navigate = useNavigate();

  const fetchdata = async () => {
    let data = {
      _id: params.id,
    };

    const response = await api("member/view", data);

    if (response && response.status === 200) {
      setMember(response.data.data);
    }
  };

  const deleteHandler = async () => {
    let data = {
      _id: params.id,
    };

    const response = await api("member/delete", data);

    if (response && response.status === 200) {
      navigate("/Memberlist");
    }
  };

  useEffect(() => {
    fetchdata();
  }, [params.id]);

  return (
    <div class="container- px-3 mt-5">
    <div className="row p-4">
      <div className="col-6">
        <h2>View Member</h2>
      </div>
      <div className="col-6">
        <Button
          name="Edit"
          link={`/Memberedit/${params.id}`}
          icon={<i class="fa-regular fa-pen-to-square p-1"></i>}
          style={{ marginLeft: "20px" }}
        />
        <Button
          name="Back"
          link="/Memberlist"
          icon={<i class="fa-solid fa-arrow-left p-1"></i>}
        />
      </div>
      <div className="container-fluid" style={{ marginTop: "60px" }}>
        <div className="row">
          <div className="row ">
            <div className="col-md-3 col-sm-4 py-4 m-3 box w-75">
              <table class="table table-borderless">
                <tbody className="fs-5">
                  <tr>
                    <td className="w-36">Date</td>
                    <td>:</td>
                    <td>{moment(member.date).format("DD-MM-YYYY")}</td>
                  </tr>
                  <tr>
                    <td className="w-36"> Form No.</td>
                    <td>:</td>
                    <td>{member.form_no}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Company Name</td>
                    <td>:</td>
                    <td>{member.company_name}</td>
                  </tr>

                  <tr>
                    <td className="w-36">Zone</td>
                    <td>:</td>
                    <td>{member?.zone?.name}</td>
                  </tr>

                  <tr>
                    <td className="w-36">Email</td>
                    <td>:</td>
                    <td>{member.email_id}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Website</td>
                    <td>:</td>
                    <td>{member.website}</td>
                  </tr>
                  <tr>
                    <td className="w-36">GST No.</td>
                    <td>:</td>
                    <td>{member.gst_no}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Business Type</td>
                    <td>:</td>
                    <td>{member?.business_types?.name}</td>
                  </tr>
                  <tr>
                    <td className="w-36">No. of Machine</td>
                    <td>:</td>
                    <td>{member.no_of_machine}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Power Supply</td>
                    <td>:</td>
                    <td>{member?.power_supply?.name}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Remark</td>
                    <td>:</td>
                    <td>{member.remark}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Renewal Date</td>
                    <td>:</td>
                    <td>
                      {moment(member.renewal_date).format("DD-MM-YYYY")}
                    </td>
                  </tr>

                  <tr>
                    <td className="w-36">Office Address</td>
                    <td>:</td>
                    <td>{member?.office_address}</td>
                  </tr>
                  <tr>
                    <td className="w-36 fs-3">
                      <b>Representatives</b>
                    </td>
                  </tr>
                  {Array.isArray(member.representative) &&
                    member.representative.map((item) => {
                      return (
                        <>
                          <tr>
                            <td className="w-36">Name</td>
                            <td>:</td>
                            <td>{item.name}</td>
                          </tr>
                          <tr>
                            <td className="w-36">Designation</td>
                            <td>:</td>
                            <td>{item.designation}</td>
                          </tr>
                        </>
                      );
                    })}

                  <tr>
                    <td className="w-36 fs-3">
                      <b>Factory Address</b>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-36">Block No.</td>
                    <td>:</td>
                    <td>{member?.factory_address?.block_no}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Plot No.</td>
                    <td>:</td>
                    <td>{member?.factory_address?.plot_no}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Estate</td>
                    <td>:</td>
                    <td>{member?.factory_address?.estate}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Gram Panchayat</td>
                    <td>:</td>
                    <td>{member?.factory_address?.gram_panchayat}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Taluka</td>
                    <td>:</td>
                    <td>{member?.factory_address?.taluka?.name}</td>
                  </tr>
                  <tr>
                    <td className="w-36">District</td>
                    <td>:</td>
                    <td>{member?.factory_address?.district?.name}</td>
                  </tr>

                  <tr>
                    <td className="w-36 fs-3">
                      <b>Mobile No.</b>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-36">Mobile No.</td>
                    <td>:</td>
                    <td>{member?.mobile_no}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Alter Mobile No.</td>
                    <td>:</td>
                    <td>{member?.alt_mobile_no}</td>
                  </tr>
                  <tr>
                    <td className="w-36 fs-3">
                      <b>No. of Worker</b>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-36">Male</td>
                    <td>:</td>
                    <td>{member?.male_workers}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Female</td>
                    <td>:</td>
                    <td>{member?.female_workers}</td>
                  </tr>
                  <tr>
                    <td className="w-36">Total</td>
                    <td>:</td>
                    <td>{member?.total_workers}</td>
                  </tr>
                  <tr>
                    <td className="w-36 pt-5">Status</td>
                    <td className="w-36 pt-5">:</td>
                    <td className="w-36 pt-5">
                      {member.status === true ? (
                        <HiCheckCircle style={{ color: "green" }} />
                      ) : (
                        <RiCloseCircleFill style={{ color: "red" }} />
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: "-200px", marginBottom: "10px" }}>
      <Footer delete={deleteHandler} />
    </div>
  </div>
  )
}

export default Memberview

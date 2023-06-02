import React , {useEffect , useState } from 'react';
import Button from '../../Components/Button';
import { Link ,useNavigate } from "react-router-dom";
import { api } from '../../helper/api';
import Pagination from "../../Components/Pagination";
import {
  TiArrowSortedUp,
  TiArrowSortedDown,
  TiArrowUnsorted,
} from "react-icons/ti";
import { RiCloseCircleFill } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";
import moment from "moment/moment";
const Memberlist = () => {
  let queryParams = new URLSearchParams(window.location.search);
  let params = queryParams.get("page_no"); 
  let initialPage = parseInt(params);

  let [member, setMember] = useState([]);
  let [sort_by, setSort_by] = useState("");
  let [sort_type, setSort_type] = useState(-1);
  const [totalRecods, setTotalRecods] = useState(0);
  let [recordPerPage, setRecordPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(
    !!initialPage ? initialPage : 1
  );
  let [id, setId] = useState();
  let [status, setStatus] = useState("");
  let [taluka, setTaluka] = useState("");
  let [district, setDistrict] = useState("");
  let [membership_no, setMembership_no] = useState("");
  let [mobile_no, setMobile_no] = useState("");
  let [business_types, setBusiness_types] = useState("");
  let [company_name, setCompany_name] = useState("");
  let [renewal_date, setRenewal_date] = useState("");
  let [from_date, setFrom_date] = useState("");
  let [to_date, setTo_date] = useState("");
  let [renewal_from_date, setRenewal_from_date] = useState("");
  let [renewal_to_date, setRenewal_to_date] = useState("");
  let [districtList, setDistrictList] = useState([]);
  let [talukaList, setTalukaList] = useState([]);
  let [business_typesList, setBusiness_typesList] = useState([]);

  let pageCount = Math.ceil(totalRecods / recordPerPage);

  const navigate = useNavigate();

  const fetchdata = async (pageNo) => {
    let data = {
      skip_number: (pageNo - 1) * recordPerPage,
      record_per_page: recordPerPage,
      sort_by: sort_by,
      sort_type: sort_type,
      from_date: from_date,
      to_date: to_date,
      renewal_from_date: renewal_from_date,
      renewal_to_date: renewal_to_date,
      taluka: taluka,
      district: district,
      membership_no: membership_no,
      company_name: company_name,
      mobile_no: mobile_no,
      business_types: business_types,
      renewal_date: renewal_date,
      status: status,
    };

    const response = await api("member", data);
    if (response && response.status === 200) {
      setTotalRecods(response?.data?.total_records);
      setMember(response.data.data);
      setBusiness_typesList(response.data.master?.business_types);
      setDistrictList(response.data.master?.districts);
      setTalukaList(response.data.master?.talukas);
    }
  };

  useEffect(() => {
    setCurrentPage(currentPage);
    fetchdata(!!params ? params : 1);
  }, [recordPerPage]);

  const onPaginationChange = async (page) => {
    let currentPage = page.selected + 1;
    fetchdata(currentPage);
    window.history.replaceState(
      {},
      "",
      window.location.pathname + "?page_no=" + currentPage
    );
  };

  const editHandler = async (item) => {
    let data = {
      _id: item._id,
      status: !item.status,
    };

    const response = await api("member/status", data);
    if (response && response.status === 200) {
      setStatus("");
      fetchdata();
    }
  };

  const sortingHandler = (key) => {
    if (sort_by === key) {
      sort_type = sort_type == 1 ? -1 : 1;
    } else {
      sort_by = key;
      sort_type = 1;
    }
    setSort_by(sort_by);
    setSort_type(sort_type);
    fetchdata();
  };

  const getSortIcon = (key) => {
    if (key === sort_by && sort_type == 1) {
      return <TiArrowSortedUp className="text-base" />;
    } else if (key === sort_by && sort_type == -1) {
      return <TiArrowSortedDown className="text-base" />;
    } else {
      return <TiArrowUnsorted className="text-base" />;
    }
  };

  console.log(member);
  return (
    <div className="container- px-3 mt-5">
    <div className="row p-4">
      <div className="col-6">
        <h2>Member List</h2>
      </div>
      <div className="col-6">
        <Button
          name="Add"
          icon={<i class="fa-solid fa-plus p-1"></i>}
          link="/Memberadd"
          className="float-end"
        />
      </div>
    </div>

    <div className="row p-4">
      <table class="table mt-5">
        <thead>
          <tr className="text-center  fs-6">
            <th scope="col">#</th>
            <th scope="col">
              Date
              <button
                onClick={() => sortingHandler("name")}
                style={{ border: "none", background: "none" }}
              >
                {getSortIcon("name")}
              </button>
            </th>
            <th scope="col">
              Membership No.
              <button
                style={{ border: "none", background: "none" }}
                onClick={() => sortingHandler("membership_no")}
              >
                {getSortIcon("membership_no ")}
              </button>
            </th>
            <th scope="col">
              Company Name
              <button
                style={{ border: "none", background: "none" }}
                onClick={() => sortingHandler("company_name")}
              >
                {getSortIcon("company_name ")}
              </button>
            </th>
            <th scope="col">Factory Address</th>
            <th scope="col">
              Mobile No.
              <button
                style={{ border: "none", background: "none" }}
                onClick={() => sortingHandler("mobile_no")}
              >
                {getSortIcon("mobile_no ")}
              </button>
            </th>
            <th scope="col">Business Type</th>
            <th scope="col">Power Supply</th>
            <th scope="col">
              Renewal Date
              <button
                style={{ border: "none", background: "none" }}
                onClick={() => sortingHandler("renewal_date")}
              >
                {getSortIcon("renewal_date ")}
              </button>
            </th>
            <th scope="col">
              Status
              <button
                style={{ border: "none", background: "none" }}
                onClick={() => sortingHandler("status")}
              >
                {getSortIcon("status ")}
              </button>
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {member.map((item, index) => {
            return (
              <>
                <tr className="text-center fs-6" key={index}>
                  <td>{index + 1}</td>
                  <td> {moment(item?.date).format("DD-MM-YYYY")}</td>
                  <td>{item?.membership_no}</td>
                  <td>{item?.company_name}</td>
                  <td>
                    {item?.factory_address?.district?.name},
                    {item?.factory_address?.taluka?.name}
                  </td>
                  <td>{item?.mobile_no}</td>
                  <td>{item?.business_types?.name}</td>
                  <td>{item?.power_supply?.name}</td>
                  <td> {moment(item?.renewal_date).format("DD-MM-YYYY")}</td>
                  <td>
                    <button
                      className="fs-5"
                      style={{ border: "none", background: "none" }}
                      onClick={() => editHandler(item)}
                    >
                      {item?.status === true ? (
                        <HiCheckCircle style={{ color: "green" }} />
                      ) : (
                        <RiCloseCircleFill style={{ color: "red" }} />
                      )}
                    </button>
                  </td>
                  <td>
                    <Link to={`/Memberview/${item._id}`}>
                      <i class="fa-sharp fa-solid fa-eye text-black"></i>
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <Pagination
        setRecordPerPage={setRecordPerPage}
        pageCount={pageCount}
        onPaginationChange={onPaginationChange}
        currentPage={currentPage}
      />
    </div>
  </div>
  )
}

export default Memberlist

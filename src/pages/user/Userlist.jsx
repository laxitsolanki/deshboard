import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button'
import { api } from '../../helper/api'
import Pagination from '../../Components/Pagination'
import { useEffect , useState } from 'react'
import {
    TiArrowSortedUp,
    TiArrowSortedDown,
    TiArrowUnsorted,
  } from "react-icons/ti";
  import { RiCloseCircleFill } from "react-icons/ri";
  import { HiCheckCircle } from "react-icons/hi";

const Userlist = () => {
    let queryParams = new URLSearchParams(window.location.search);

    let params = queryParams.get("page_no");
    let initialPage = parseInt(params);
  
    const [user, setUser] = useState([]);
    const [totalRecods, setTotalRecods] = useState(0);
    let [sort_by, setSort_by] = useState("");
    let [sort_type, setSort_type] = useState(-1);
    let [recordPerPage, setRecordPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(
      !!initialPage ? initialPage : 1
    );
    let [status, setStatus] = useState("");
  
    let pageCount = Math.ceil(totalRecods / recordPerPage);
  
    console.log(user)
  
    const loaddata = async (pageNo) => {
      let data = {
        skip_number: (pageNo - 1) * recordPerPage,
        record_per_page: recordPerPage,
        sort_by: sort_by,
        sort_type: sort_type,
        status: status,
      };
      let response = await api("user", data);
      console.log(response.data.data);
      if (response && response.status === 200) {
        if (response?.data?.total_records) {
          setTotalRecods(response?.data?.total_records);
        }
        setUser(response?.data?.data);
      } else {
        alert("error");
      }
    };
  
  
    const onPaginationChange = async (page) => {
      let currentPage = page.selected + 1;
      loaddata(currentPage);
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
  
      const response = await api("user/status", data);
      if (response && response.status === 200) {
        setStatus("");
        loaddata();
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
      loaddata();
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
  
    useEffect(() => {
      setCurrentPage(currentPage);
      loaddata(!!params ? params : 1);
    }, [recordPerPage]);
    
  
  return (
<div className="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2> User List</h2>
        </div>
        <div className="col-6">
          <Button
            name="Add"
            icon={<i class="fa-solid fa-plus p-1"></i>}
            link="/Useradd"
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
                Name
                <button
                  onClick={() => sortingHandler("name")}
                  style={{ border: "none", background: "none" }}
                >
                  {getSortIcon("name")}
                </button>
              </th>
              <th>
                Email-id
                <button
                  onClick={() => sortingHandler("email_id")}
                  style={{ border: "none", background: "none" }}
                >
                  {getSortIcon("email_id")}
                </button>
              </th>
              <th>
                Mobile-no
                <button
                  onClick={() => sortingHandler("mobile_no")}
                  style={{ border: "none", background: "none" }}
                >
                  {getSortIcon("mobile_no")}
                </button>
              </th>
              <th scope="col">
                Status
                <button
                  onClick={() => sortingHandler("status")}
                  style={{ border: "none", background: "none" }}
                >
                  {getSortIcon("status")}
                </button>
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => {
              return (
                <>
                  <tr className="text-center fs-6" key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email_id}</td>
                    <td>{item.mobile_no}</td>
                    <td>
                      <button
                        className="fs-5"
                        style={{ border: "none", background: "none" }}
                        onClick={() => editHandler(item)}
                      >
                        {item.status === true ? (
                          <HiCheckCircle className="focus:outline-none text-green-700 text-lg" />
                        ) : (
                          <RiCloseCircleFill className="focus:outline-none text-red-700 text-lg" />
                        )}
                      </button>
                    </td>
                    <td>
                      <Link to={`/Userview/${item._id}`}>
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

export default Userlist

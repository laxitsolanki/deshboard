import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { api } from "../../helper/api";
import Pagination from "../../Components/Pagination";
import {
  TiArrowSortedUp,
  TiArrowSortedDown,
  TiArrowUnsorted,
} from "react-icons/ti";
import { RiCloseCircleFill } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";
const VehicleList = () => {
  let queryParams = new URLSearchParams(window.location.search);

  let params = queryParams.get("page_no");
  let initialPage = parseInt(params);

  const [district, setDistrict] = useState([]);
  const [totalRecods, setTotalRecods] = useState(0);
  let [sort_by, setSort_by] = useState("");
  let [sort_type, setSort_type] = useState(-1);
  let [recordPerPage, setRecordPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(
    !!initialPage ? initialPage : 1
  );

  let [id, setId] = useState();
  let [status, setStatus] = useState("");
  let [name, setName] = useState("");

  let pageCount = Math.ceil(totalRecods / recordPerPage);

  const loaddata = async (pageNo) => {
    let data = {
      skip_number: (pageNo - 1) * recordPerPage,
      record_per_page: recordPerPage,
      sort_by: sort_by,
      sort_type: sort_type,
      name: name,
      status: status,
    };

    let response = await api("master/district", data);
    console.log(response.data.data);
    if (response && response.status === 200) {
      if (response?.data?.total_records) {
        setTotalRecods(response?.data?.total_records);
      }
      setDistrict(response.data.data);
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

  const editHandler = (item) => {
    setStatus(item.status);
    setId(item._id);
  };

  const statusHandler = async () => {
    let data = {
      _id: id,
      status: !status,
    };

    const response = await api("master/district/status", data);
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
          <h2>District List</h2>
        </div>
        <div className="col-6">
          <Button
            name="Add"
            icon={<i class="fa-solid fa-plus p-1"></i>}
            link="/adddistrict"
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
                District
                <button
                  onClick={() => sortingHandler("name")}
                  style={{ border: "none", background: "none" }}
                >
                  {getSortIcon("name")}
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
            {district.map((item, index) => {
              return (
                <>
                  <tr className="text-center fs-6" key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td onClick={() => editHandler(item)}>
                      {item.status === true ? (
                        <HiCheckCircle />
                      ) : (
                        <RiCloseCircleFill />
                      )}
                    </td>
                    <td>
                      <Link to={`/viewdistrict/${item._id}`}>
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
  );
};

export default VehicleList;

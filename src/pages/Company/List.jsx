import React, { useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className="container- px-5 mt-5">
      <div className="row">
        <h2 className="mb-4">Company</h2>
        <table className="table mt-5">
          <thead>
            <tr className="text-center  fs-6">
              <th scope="col">
                Name
                <i
                  className="fa-solid fa-arrow-up"
                  style={{ paddingLeft: "3px" }}
                ></i>
              </th>
              <th scope="col">
                Email
                <i
                  className="fa-solid fa-arrow-up"
                  style={{ paddingLeft: "3px" }}
                ></i>
              </th>
              <th scope="col">
                Phone
                <i
                  className="fa-solid fa-arrow-up"
                  style={{ paddingLeft: "3px" }}
                ></i>
              </th>
              <th scope="col">
                Status
                <i
                  className="fa-solid fa-arrow-up"
                  style={{ paddingLeft: "3px" }}
                ></i>
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center fs-6">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link to="/viewcompany">
                  <i class="fa-sharp fa-solid fa-eye text-black"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;

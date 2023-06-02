import React from 'react'
import Button from '../../Components/Button'
import { Link } from 'react-router-dom'

const Expenselist = () => {
  return (
    <div className="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Expense List</h2>
        </div>
        <div className="col-6">
          <Button name='Add' icon={<i class="fa-solid fa-plus p-1"></i>} link="/addexpense" className="float-end"/>
        </div>
      </div>

      <div className="row p-4">
        <table class="table mt-5">
          <thead>
            <tr className="text-center  fs-6">
              <th scope="col">Date<i className="fa-solid fa-arrow-up" style={{ paddingLeft: "3px" }}></i></th>
              <th scope="col">ExpenseCategory<i className="fa-solid fa-arrow-up" style={{ paddingLeft: "3px" }}></i></th>
              <th scope="col">Driver<i className="fa-solid fa-arrow-up" style={{ paddingLeft: "3px" }}></i></th>
              <th scope="col">Company<i className="fa-solid fa-arrow-up" style={{ paddingLeft: "3px" }}></i></th>
              <th scope="col">Amount<i className="fa-solid fa-arrow-up" style={{ paddingLeft: "3px" }}></i></th>
              <th scope="col">Status<i className="fa-solid fa-arrow-up" style={{ paddingLeft: "3px" }}></i></th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center fs-6">
              <td>Meera</td>
              <td>8320066228</td>
              <td>Car</td>
              <td>meera@gmail.com</td>
              <td>Femail</td>
              <td>Active</td>
              <td>
                <Link to="/viewexpense">
                  <i class="fa-sharp fa-solid fa-eye text-black"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example ">
          <ul class="pagination d-flex justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Expenselist

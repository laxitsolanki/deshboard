import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function pagination({
  onPaginationChange,
  recordPerPage,
  pageCount,
  currentPage,
  setRecordPerPage,
}) {
  return (
    <>
      <div>
        <div>
          <Pagination
            className="float-end"
            onPageChange={(e) => onPaginationChange(e)}
          >
            {console.log(2222,pageCount)}
            <Pagination.Prev initialPage={currentPage - 1} />
            <Pagination.Item>{pageCount}</Pagination.Item>
            <Pagination.Next initialPage={currentPage + 1} />
          </Pagination>
        </div>
        <div className="pagination_page">
          <select
            id="countries"
            className="float-end form-select"
            value={recordPerPage}
            onChange={(e) => setRecordPerPage(e.target.value)}
            style={{ width: "70px", height: "50px", marginRight: "10px" }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>
    </>
  );
}

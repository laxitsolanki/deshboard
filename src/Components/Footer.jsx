import React from "react";

export default function Footer2(props) {
  return (
    <div>
      <footer className="" style={{ marginTop: "210px" }}>
        <div className="row px-3">
          <div className="col d-flex">
            <div className="btn-1">
              <button
                type="button"
                className="btn  btn-secondary"
                onClick={props.delete}
              >
                <i class="fa-sharp fa-solid fa-trash p-1"></i>
                Delete
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

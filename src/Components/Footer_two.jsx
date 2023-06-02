import React from "react";

export default function Footer(props) {
  return (
    <div>
      <footer className="" style={{ marginTop: "210px" }}>
        <div className="row px-3">
          <div className="col d-flex">
            <div className="btn-1">
              <button
                type="button"
                className="btn btn-success"
                onClick={props.add}
              >
                Save
              </button>
            </div>
            <div className="btn-2 px-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={props.cancle}
              >
                Cancle
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

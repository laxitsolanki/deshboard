import React from "react";

const Navtop = (props) => {
  const change = () => {
    props.side(!props.sidebar);
  };

  return (
    <>
      <div className="navbar-default">
        <button className="btn fs-4" onClick={change}>
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </>
  );
};

export default Navtop;

import React, { useState } from "react";
import Button from "../../Components/Button";
import { api } from "../../helper/api";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const data = {
    emailAddress: user,
    verificationCode: code,
  };

  const verify = async (e) => {
    e.preventDefault();
    console.log(data);
    let response = await api("company/login/verify", data);
    console.log(response);

    localStorage.clear("user");

    if (response && response.status === 200) {
      console.warn(response);
      navigate("/login");
    }
  };
  return (
    <>
      <section className="wrapper">
        <div className="container" style={{position: 'absolute',top:' 50%',left: '50%',transform: 'translate(-50%,-50%)'}}>
          <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 text-center">
            <form className="rounded bg-white shadow p-4">
              <h3 className="text-dark fw-bolder fs-4 mb-2">
                Two Step Verification
              </h3>
              <div className="fw-normal text-muted mb-4">
                Enter the verification code we sent to
              </div>
              <div className="d-flex align-items-center justify-content-center fw-bold mb-4">
                <span className="fs-6">{user}</span>
              </div>
              <div className="otp_input text-start mb-2">
                <label for="digit">Type your 6 digit security code</label>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    autoFocus
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-5">
                <Button name="Verify" onclick={verify} />
              </div>

              <div className="fw-normal text-muted mb-2">
                Didn’t get the code ?{" "}
                <a
                  href="#"
                  className="text-primary fw-bold text-decoration-none"
                >
                  Resend
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verification;

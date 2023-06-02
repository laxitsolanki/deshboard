import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "../../Components/Button";
import { resetError, showError } from "../../helper/error";
import { api } from "../../helper/api";
import Joi from "joi";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase/firebase.config";

const googleprovider = new GoogleAuthProvider();
const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate();

  const validate = (data) => {
    const schema = Joi.object({
      emailAddress: Joi.string().max(100).required(),
      phone: Joi.string().max(10).required(),
      password: Joi.string().max(8).required(),
    });
    return schema.validate(data, { abortEarly: false, allowUnknown: true });
  };

  const Signupbtn = async () => {
    resetError();
    const registerType = "email";
    let data = {
      emailAddress: email,
      phone: phone,
      password: password,
      registerType,
    };

    const { error } = validate(data);
    if (error) showError(error.details);

    let response = await api("company/login/signup", data);
    console.log(response);

    if (response && response.status === 200) {
      console.warn(response);
      localStorage.setItem("user", data.emailAddress);
      navigate("/verification");
    }
  };

  const handlesignup =  () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const loggeduser = result.user;
        console.log(loggeduser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <div className="container p-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderradius: " 25px" }}>
              <div className="card-body  p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 mb-5">
                      Sign up
                    </p>
                    <form className="" method="POST">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="form3Example4c"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Phone
                          </label>
                          <input
                            type="number"
                            id="form3Example4cd"
                            className="form-control"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4cd1"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-5">
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            CPassword
                          </label>
                          <input
                            type="password"
                            id="form3Example4cd2"
                            className="form-control"
                            value={cpassword}
                            onChange={(e) => setCpassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 ">
                        <Button name="Sign Up" onclick={Signupbtn} />
                      </div>
                      <div className="text-center">
                        <span style={{ opacity: "0.2", fontSize: "15px" }}>
                          ----------------------- OR -----------------------
                        </span>
                      </div>
                      <div className="gmail text-center mt-3 mb-3">
                        <FcGoogle
                          fontSize={30}
                          style={{ cursor: "pointer" }}
                          onClick={handlesignup}
                        />
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <p className="mt-3">
                          Already have an account?
                          <Link
                            to="/login"
                            style={{ color: "blue" }}
                            className="fs-6 px-1"
                          >
                            Login
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

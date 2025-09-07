import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RecruiterLogin = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const { setShowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData } =
    useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Login") {
        const { data } = await axios.post(`${backendUrl}/api/company/login`, {
          email,
          password,
        });
        if (data.success) {
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem("companyToken", data.token);
          setShowRecruiterLogin(false);
          toast.success(data.message);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      } else {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("image", image);

        const { data } = await axios.post(
          `${backendUrl}/api/company/register`,
          formData
        );

        if (data.success) {
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem("companyToken", data.token);
          setShowRecruiterLogin(false);
          toast.success(data.message);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className=" relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        <>
          {state !== "Login" && (
            <>
              <div className="border px-4 py-2 flex items-center gap-2 rounded-lg mt-5">
                <img src={assets.person_icon} alt="" />
                <input
                  className="text-sm outline-none"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div className="border px-4 py-2 flex items-center gap-2 rounded-lg mt-5">
                <label htmlFor="image" className="cursor-pointer ">
                  <img
                    className="w-16 rounded-full"
                    src={
                      image ? URL.createObjectURL(image) : assets.upload_area
                    }
                    alt=""
                  />
                  <input
                    className="text-sm outline-none"
                    type="file"
                    accept="image/*"
                    id="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    hidden
                  />
                </label>

                <p>Upload company Logo</p>
              </div>
            </>
          )}

          <div className="border px-4 py-2 flex items-center gap-2 rounded-lg mt-5">
            <img src={assets.email_icon} alt="" />
            <input
              className="text-sm outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="google@demo.com"
              required
            />
          </div>
          <div className="border px-4 py-2 flex items-center gap-2 rounded-lg mt-5">
            <img src={assets.lock_icon} alt="" />
            <input
              className="text-sm outline-none"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          {state === "Login" && (
            <p className="text-sm text-blue-600 mt-2 cursor-pointer">
              Forgot Password?
            </p>
          )}
        </>

        <button
          onClick={onSubmitHandler}
          className="bg-blue-600 w-full text-white py-2 rounded-full mt-5"
        >
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {state === "Login" ? (
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Signup")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowRecruiterLogin(false)}
          className="absolute top-5 right-5 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </form>
    </div>
  );
};

export default RecruiterLogin;

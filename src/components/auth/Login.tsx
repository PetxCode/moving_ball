import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAccount, logoutAccount } from "../../api/apiCalls";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [toggle, setToggle] = useState<boolean>(false);

  const handleSubmit = async () => {
    setToggle(true);
    loginAccount({ email, password })
      .then((res) => {
        if (res.status === 201) {
          //   navigate("/");
          console.log(res);
        }
      })
      .finally(() => {
        setToggle(false);
      });
  };

  const logout = async () => {
    await logoutAccount().then((res) => {
      console.log(res);
    });
  };

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <div>
        <div className="border rounded-md w-[400px] min-h-[300px] p-5 pb-5">
          <h1 className="text-center text-[20px] font-semibold">
            Login Screen
          </h1>

          <div className="flex flex-col mb-3">
            <label className="text-[12px] font-semibold ">Email</label>
            <input
              placeholder="Email"
              className="pl-2 w-full h-[45px] border rounded-md outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="text-[12px] font-semibold ">Password</label>
            <input
              placeholder="Password"
              className="pl-2 w-full h-[45px] border rounded-md outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="w-full flex items-center justify-center bg-blue-950 text-white h-[50px] mt-4 rounded-md"
            onClick={handleSubmit}
          >
            Login
          </button>

          <p className="text-[12px] font-medium mt-3 text-center ">
            Don't have an Account,{" "}
            <Link to="/register" className="italic">
              Create one Here
            </Link>
          </p>
        </div>
      </div>
      <div
        className="w-[400px] rounded-md mt-5 h-[50px] bg-red-500 text-white flex items-center justify-center cursor-pointer"
        onClick={logout}
      >
        Goolge
      </div>
    </main>
  );
};

export default Login;

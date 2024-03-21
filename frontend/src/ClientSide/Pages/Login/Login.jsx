import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [loginUser, setLoginUser] = useState();
  const [registeredUser, setRegisteredUser] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoginUser(data);
   
    for (const user of registeredUser) {
      if (user?.email == loginUser?.email && user?.password == loginUser?.password) {
       toast("login success")
       navigate("/")
      }
      else{
        toast("wrong email and password")
      }
    }
  };
  
  const handleSignUpClick = () => {
    navigate("/signUp");
  };
  useEffect(() => {
    axios.get("http://localhost:3000/get-user-registration").then((res) => {
      setRegisteredUser(res.data);
    });
  }, [loginUser]);

  return (
    <>
      <Navbar />
      <h2 className="text-4xl text-center dark:text-white">Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-slate-600 p-10 rounded-lg m-5"
      >
        <div className="mb-4">
          <label htmlFor="name" className="text-sm font-medium text-white">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter userId..."
            {...register("email", { required: true })}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">Enter UserId</p>}
          <label htmlFor="password" className="text-sm font-medium text-white">
            Password:
          </label>
          <input
            placeholder="Enter password..."
            id="password"
            className="mt-1 p-2 border rounded-md w-full"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="text-red-500">Enter Password</p>}
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-800 text-white font-semibold px-4 py-2 rounded hover:bg-green-950"
          >
            Login
          </button>

          <button
            type="submit"
            onClick={handleSignUpClick}
            className="bg-green-800 text-white font-semibold px-4 py-2 rounded hover:bg-green-950 ml-9"
          >
            Sign Up
          </button>
        </div>
      </form>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Login;

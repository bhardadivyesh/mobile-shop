import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { appContext } from "../../Context/Context";
import ApiHelper from "../../Helper/ApiHelper";
const Login = () => {
  const value =useContext(appContext)
 console.log(value);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const  onSubmit = async (data) => {
   const request ={
      path:`login`,
      data : data
    }
    const res =  await ApiHelper.post(request)
      if (res.loginData?.role?.client) {
          navigate("/home");
        } else if (res.loginData?.role?.admin) {
          navigate("/adminHome");
        } else {
          toast("Invalid Email and Password");
        }
  };
  const handleSignUpClick = () => {
    navigate("/signUp");
  };
  return (
    <>
      {/* <Navbar /> */}
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
      {/* <Footer /> */}
    </>
  );
};

export default Login;

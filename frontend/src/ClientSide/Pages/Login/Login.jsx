import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () =>{

  const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);

      const handleSignUpClick = () =>{
        navigate("/signUp")
      }

    return(
        <>
        <Navbar />
        <h2 className="text-4xl text-center dark:text-white">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-slate-600 p-10 rounded-lg m-5">
  <div className="mb-4">
    <label htmlFor="name" className="text-sm font-medium text-white">UserId:</label>
    <input
      id="name"
      type="text"
      placeholder="Enter userId..."
      {...register("name", { required: true })}
      className="mt-1 p-2 border rounded-md w-full"
    />
    {errors.name && <p className="text-red-500 text-sm">Enter UserId</p>}
    <label htmlFor="password" className="text-sm font-medium text-white">Password:</label>
    <input placeholder="Enter password..." id="password" className="mt-1 p-2 border rounded-md w-full" {...register("password",{required : true})}/>
    {errors.password && <p className="text-red-500">Enter Password</p>}
  </div>
  <div>
    <button type="submit" className="bg-green-800 text-white font-semibold px-4 py-2 rounded hover:bg-green-950">Login</button>

    <button type="button" onClick={handleSignUpClick} className="bg-green-800 text-white font-semibold px-4 py-2 rounded hover:bg-green-950 ml-9">Sign Up</button>
  </div>
</form>
        <Footer />
        </>
    )
}

export default Login;
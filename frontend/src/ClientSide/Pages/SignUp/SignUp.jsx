import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        console.log('Form data sent successfully');
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <h2 className="text-4xl text-center dark:text-white p-5">SignUp</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-8/12 mx-auto bg-slate-600 p-10 rounded-lg m-5"
      >
        <div className="mb-4">
          <div className="flex items-center mb-4">
            <div className="w-1/2 pr-4">
              <label htmlFor="name" className="text-sm font-medium text-white">
                Name :
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name..."
                {...register("name", { required: true })}
                className="mt-1 p-2 border rounded-md w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>
            <div className="w-1/2 pl-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-white"
              >
                Address :
              </label>
              <textarea
                className="mt-1 p-2 border rounded-md w-full"
                rows={1}
                placeholder="Enter address..."
                {...register("address", { required: true })}
              />
              {errors.address && <p className="text-red-500">Address is required</p>}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-1/2 pr-4">
              <label
                htmlFor="userId"
                className="block text-sm font-medium text-white"
              >
                Your UserId :
              </label>
              <input
                className="mt-1 p-2 border rounded-md w-full"
                {...register("userId", { required: false })}
                readOnly
              />
              {errors.userId && (
                <p className="text-red-500">Your userId is not shown</p>
              )}
            </div>
            <div className="w-1/2 pl-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password :
              </label>
              <input
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Password..."
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-1/2 pr-4">
              <label
                htmlFor="ConfirmPassword"
                className="block text-sm font-medium text-white"
              >
                Confirm Password :
              </label>
              <input
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter confirm password..."
                {...register("ConfirmPassword", { required: true })}
              />
              {errors.ConfirmPassword && (
                <p className="text-red-500">ConfirmPassword is required</p>
              )}
            </div>
            <div className="w-1/2 pl-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email :
              </label>
              <input
                placeholder="Enter email..."
                className="mt-1 p-2 border rounded-md w-full"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-1/2 pr-4">
              <label
                htmlFor="gender"
                className="text-sm font-medium text-white"
              >
                Gender :
              </label>
              <input
                type="radio"
                id="male"
                value="male"
                {...register("gender", { required: true })}
              />
              <label htmlFor="male" className="ml-2 mr-4 text-white">
                Male
              </label>
              <input
                type="radio"
                id="female"
                value="female"
                {...register("gender")}
              />
              <label htmlFor="female" className="ml-2 text-white">
                Female
              </label>
              {errors.gender && (
                <p className="text-red-500">Gender is required</p>
              )}
            </div>
            <div className="w-1/2 pl-4">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-white"
              >
                state :
              </label>
              <input
                placeholder="Enter state..."
                className="mt-1 p-2 border rounded-md w-full"
                {...register("state", { required: true })}
              />
              {errors.state && <p className="text-red-500">state is required</p>}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-1/2 pr-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-white"
              >
                city :
              </label>
              <input
                placeholder="Enter city..."
                className="mt-1 p-2 border rounded-md w-full"
                {...register("city", { required: true })}
              />
              {errors.city && <p className="text-red-500">city is required</p>}
            </div>
            <div className="w-1/2 pl-4">
              <label
                htmlFor="contactno1"
                className="block text-sm font-medium text-white"
              >
            Contact No 1 :
              </label>
              <input
                placeholder="Enter Contact no1..."
                className="mt-1 p-2 border rounded-md w-full"
                {...register("contactno1", { required: true })}
              />
              {errors.contactno1 && (
                <p className="text-red-500">contact No 1 is required</p>
              )}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-1/2 pr-4">
              <label
                htmlFor="contactno2"
                className="block text-sm font-medium text-white"
              >
                Contact No 2 :
              </label>
              <input
                placeholder="Enter Contact no2..."
                className="mt-1 p-2 border rounded-md w-full"
                {...register("contactno2", { required: true })}
              />
              {errors.contactno2 && (
                <p className="text-red-500">contact No 2 is required</p>
              )}
            </div>
            <div className="w-1/2 pl-4">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-white"
              >
                Photo
              </label>
              <input type="file" {...register("photo", { required: true })} />
              {errors.photo && <p className="text-red-500">photo required</p>}
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-800 w-1/2 text-white font-semibold px-4 py-2 rounded hover:bg-green-950"
          >
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default SignUp;

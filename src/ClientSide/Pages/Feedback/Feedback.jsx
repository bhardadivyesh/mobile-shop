import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { useForm } from "react-hook-form";
const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Navbar />
      <div className="p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-slate-300 p-10 rounded-lg">
  <div className="mb-4">
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
    <input
      id="name"
      type="text"
      placeholder="Enter Name..."
      {...register("name", { required: true })}
      className="mt-1 p-2 border rounded-md w-full"
    />
    {errors.name && <span className="text-red-500 text-sm">Enter Name</span>}
  </div>

  <div className="mb-4">
    <label htmlFor="number" className="block text-sm font-medium text-gray-700">Mobile Number:</label>
    <input
      id="number"
      type="text"
      placeholder="Enter Mobile number..."
      {...register("number", { required: true })}
      className="mt-1 p-2 border rounded-md w-full"
    />
    {errors.number && <span className="text-red-500 text-sm">Enter mobile number</span>}
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
    <input
      id="email"
      type="email"
      placeholder="Enter email"
      {...register("email", { required: true })}
      className="mt-1 p-2 border rounded-md w-full"
    />
    {errors.email && <span className="text-red-500 text-sm">Enter Email</span>}
  </div>

  <div className="mb-4">
    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback:</label>
    <textarea
      id="feedback"
      placeholder="Enter feedback here......"
      {...register("feedback", { required: true })}
      className="mt-1 p-2 border rounded-md w-full"
    />
    {errors.feedback && <span className="text-red-500 text-sm">Enter feedback</span>}
  </div>

  <div>
    <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">Submit</button>
  </div>
</form>
</div>

      <Footer />
    </>
  );
};

export default Feedback;

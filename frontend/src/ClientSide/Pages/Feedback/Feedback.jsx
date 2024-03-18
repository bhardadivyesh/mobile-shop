import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { useForm } from "react-hook-form";
const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
    
      const response = await (await fetch('http://localhost:3000/post-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })).json();
      if (response.status === 'OK') {
       console.log("data send successfully");
      } else {
       console.log("data not send");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <Navbar />
      <h2 className="text-4xl text-center dark:text-white mt-5">Feedback</h2>
      <div className="p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-slate-600 p-10 rounded-lg">
  <div className="mb-4">
    <label htmlFor="name" className="text-sm font-medium text-white">Name:</label>
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
    <label htmlFor="number" className="text-sm font-medium text-white">Mobile Number:</label>
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
    <label htmlFor="email" className="text-sm font-medium text-white">Email:</label>
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
    <label htmlFor="feedback" className="text-sm font-medium text-white">Feedback:</label>
    <textarea
      id="feedback"
      placeholder="Enter feedback here......"
      {...register("feedbackData", { required: true })}
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

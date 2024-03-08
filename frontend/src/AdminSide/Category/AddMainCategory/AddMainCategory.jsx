import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { useForm } from "react-hook-form";
const AddMainCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl m-4">Add New Main Category</h1>
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto bg-slate-600 p-10 rounded-lg m-5"
        >
          <div className="mb-4">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Enter Category Name :
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Category Name..."
              {...register("categoryname", { required: true })}
              className="mt-1 p-2 border rounded-md w-full"
            />
            {errors.categoryname && (
              <p className="text-red-500 text-sm">Enter Category Name :</p>
            )}
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-white pt-4"
            >
              Photo
              <input type="file" {...register("photo", { required: true })} />
            </label>
            {errors.photo && <p className="text-red-500">photo required</p>}
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold px-4 py-2 rounded ml-32"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddMainCategory;

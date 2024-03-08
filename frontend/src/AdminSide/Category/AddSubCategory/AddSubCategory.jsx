import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { useForm } from "react-hook-form";

const AddSubCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl m-4">Add New Sub Category </h1>
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto bg-slate-600 p-10 rounded-lg m-5"
        >
          <div className="mb-4">
            <label className="text-sm font-medium text-white"> Select main category</label>
            <select className="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium w-48" {...register("maincategory",{required : true})}>
              <option
                className="rounded-md px-3 py-2 text-sm font-medium"
                value="electronic"
              >
                Electronic
              </option>
            </select>
            {errors.maincategory && <p className="text-red-500">Main category is required</p>}
            <br />
            <label htmlFor="name" className="text-sm font-medium text-white">
            Enter Category name:
              </label>
              <input
                id="name"
                type="text"
                placeholder="	Enter Category name..."
                {...register("categoryname", { required: true })}
                className="mt-1 p-2 border rounded-md w-full"
              />
              {errors.categoryname && (
                <p className="text-red-500 text-sm">Category name is required</p>
              )}

            <label
              htmlFor="photo"
              className="block text-sm font-medium text-white pt-4"
            >
            Category image
              <input type="file" {...register("photo", { required: true })} />
            </label>
            {errors.photo && <p className="text-red-500">	Category image image required</p>}
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

export default AddSubCategory;

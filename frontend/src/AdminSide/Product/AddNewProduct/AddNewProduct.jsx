import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <>
        <Navbar />
        <h2 className="text-4xl text-center dark:text-white p-5">
          Add Product
        </h2>
        <form
  onSubmit={handleSubmit(onSubmit)}
  className="w-8/12 mx-auto bg-slate-600 p-10 rounded-lg m-5"
>
  <div className="mb-4">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="product-id"
          className="text-sm font-medium text-white"
        >
          Product Id:
        </label>
        <input
          id="product-id"
          type="text"
          {...register("productid", { required: false })}
          className="mt-1 p-2 border rounded-md w-full"
        readOnly
        />
        {errors.productid && (
          <p className="text-red-500 text-sm">Product Id is required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="product-name"
          className="text-sm font-medium text-white"
        >
          Enter Product Name:
        </label>
        <input
          id="product-name"
          type="text"
          placeholder="Enter name..."
          {...register("productname", { required: true })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.productname && (
          <p className="text-red-500 text-sm">
            Product Name is required
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="product-description"
          className="block text-sm font-medium text-white"
        >
          Enter Product Description:
        </label>
        <textarea
          id="product-description"
          className="mt-1 p-2 border rounded-md w-full"
          rows={1}
          placeholder="Enter Product Description..."
          {...register("productdescription", { required: true })}
        />
        {errors.productdescription && (
          <p className="text-red-500">Product Description is required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="price"
          className="text-sm font-medium text-white"
        >
          Price:
        </label>
        <input
          id="price"
          type="text"
          placeholder="Enter Product price"
          {...register("price", { required: true })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">Price is required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="quantity"
          className="text-sm font-medium text-white"
        >
          Enter Quantity:
        </label>
        <input
          id="quantity"
          type="text"
          placeholder="Enter Quantity"
          {...register("quantity", { required: true })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.quantity && (
          <p className="text-red-500 text-sm">Quantity is required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="discount"
          className="text-sm font-medium text-white"
        >
          Discount:
        </label>
        <input
          id="discount"
          type="text"
          placeholder="Enter Discount"
          {...register("discount", { required: true })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.discount && (
          <p className="text-red-500 text-sm">Discount is required</p>
        )}
      </div>
      <div>
        <label className="text-sm font-medium text-white">
          Select Main Category
        </label>
        <select className="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium w-full" {...register("maincategory",{required : false})}>
          <option
            className="rounded-md px-3 py-2 text-sm font-medium"
            value="electronic"
          >
            ELECTRONIC
          </option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-white">
          Select Sub Category
        </label>
        <select className="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium w-full" {...register("subcategory",{required : false})}>
          <option
            className="rounded-md px-3 py-2 text-sm font-medium"
            value="mobile"
          >
            MOBILE
          </option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-white">
          Select Series
        </label>
        <select className="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium w-full" {...register("series",{required : false})}>
          <option
            className="rounded-md px-3 py-2 text-sm font-medium"
            value="vivo"
          >
            VIVO SERIES
          </option>
        </select>
      </div>
      <div>
        <label
          htmlFor="status"
          className="text-sm font-medium text-white"
        >
          Status:
        </label>
        <input
          id="status"
          type="text"
          {...register("status", { required: true })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.status && (
          <p className="text-red-500 text-sm">Status is required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="size"
          className="text-sm font-medium text-white"
        >
          Size:
        </label>
        <input
          id="size"
          type="text"
          {...register("size", { required: true })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.size && (
          <p className="text-red-500 text-sm">Size is required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="color"
          className="text-sm font-medium text-white"
        >
          Color:
        </label>
        <input
          id="color"
          type="text"
          {...register("color", { required: true })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.color && (
          <p className="text-red-500 text-sm">Color is required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="photo1"
          className="block text-sm font-medium text-white"
        >
          Upload Image 1
        </label>
        <input type="file" {...register("photo1", { required: true })} />
        {errors.photo1 && <p className="text-red-500">Photo 1 required</p>}
      </div>
      <div>
        <label
          htmlFor="photo2"
          className="block text-sm font-medium text-white"
        >
          Upload Image 2
        </label>
        <input type="file" {...register("photo2", { required: true })} />
        {errors.photo2 && <p className="text-red-500">Photo 2 required</p>}
      </div>
      <div>
        <label
          htmlFor="photo3"
          className="block text-sm font-medium text-white"
        >
          Upload Image 3
        </label>
        <input type="file" {...register("photo3", { required: true })} />
        {errors.photo3 && <p className="text-red-500">Photo 3 required</p>}
      </div>
      <div>
        <label
          htmlFor="photo4"
          className="block text-sm font-medium text-white"
        >
          Upload Image 4
        </label>
        <input type="file" {...register("photo4", { required: true })} />
        {errors.photo4 && <p className="text-red-500">Photo 4 required</p>}
      </div>
      <div>
        <label
          htmlFor="bill-no"
          className="text-sm font-medium text-white"
        >
          Bill No:
        </label>
        <input
          id="bill-no"
          type="text"
          {...register("billno", { required: true })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.billno && (
          <p className="text-red-500 text-sm">Bill No is required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="purchase-detail"
          className="text-sm font-medium text-white"
        >
          Purchase Detail:
        </label>
        <input
          id="purchase-detail"
          type="text"
          {...register("purchasedetail", { required: true })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.purchasedetail && (
          <p className="text-red-500 text-sm">Purchase Detail is required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="purchase-date"
          className="text-sm font-medium text-white"
        >
          Purchase Date:
        </label>
        <input
          id="purchase-date"
          type="text"
          {...register("purchasedate", { required: true })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.purchasedate && (
          <p className="text-red-500 text-sm">Purchase Date is required</p>
        )}
      </div>
      <button type="submit" className="bg-blue-500 w-96 h-12 mt-6 rounded-lg">submit</button>
    </div>
  </div>
</form>
        <Footer />
      </>
    </>
  );
};

export default AddNewProduct;

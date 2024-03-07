import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import imageslider1 from "../../../assets/Sony product/imageslider1.avif"
import { useNavigate } from "react-router-dom";

const ManageProduct = () => {
    const navigate = useNavigate()

    const handleButtonClick = () =>{
        navigate("/AddNewProduct")
       
    }
  return (
    <>
      <>
        <Navbar />
        <h1 className="text-2xl font-medium dark:text-white text-center m-5">
          Manage Products
        </h1>

        <div className="flex justify-center items-center">
          <button type="submit" className="bg-blue-400 text-white rounded-lg px-5 py-2.5" onClick={handleButtonClick}>Add New Product</button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                Product ID
                </th>
                <th scope="col" className="px-6 py-3">
                Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                Price
                </th>
                <th scope="col" className="px-6 py-3">
                Available Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                Product Image
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800 border">
                <th scope="row" className="px-6 py-4">
                <button className="rounded-sm bg-blue-400 text-white p-3" onClick={handleButtonClick}>
                    Edit
                  </button>
                  <button className="rounded-sm bg-blue-400 text-white p-3 ml-4">
                    Delete
                  </button>
                </th>
                <td className="px-6 py-4">
                    00001
                </td>
                <td className="px-6 py-4">
                    XPERIA R1 PLUS
                </td>
                <td className="px-6 py-4">
                8999
                </td>
                <td className="px-6 py-4">
                    10
                </td>
                <td className="px-6 py-4">
                    <img src={imageslider1} alt="product image" className="h-20 w-32"/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Footer />
      </>
    </>
  );
};

export default ManageProduct;

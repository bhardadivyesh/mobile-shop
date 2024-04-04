import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ApiHelper from "../../../Helper/ApiHelper";

const ManageProduct = () => {
  const [productData, setProductData] = useState();
  const [reRenderComponent,setRerenderComponent] = useState()
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/AddNewProduct");
  };
  useEffect(() => {
    const request = {
      path: `get-product`,
    };
    const fetchData = async () => {
        const response = await ApiHelper.get(request);
        console.log(response.data);
        setProductData(response.data);
      }
    fetchData();
  }, [reRenderComponent]);
  const handleDeleteBtnClick = async(productname) =>{
    axios.put("http://localhost:3000/put-product", {
      data: { productname: productname },
    })
    .then((response) => {
      if (response.status === 200) {
        setRerenderComponent((prevState) => !prevState);
      }
    })
    .catch((error) => {
      console.error("Error deleting feedback:", error);
    });
  }
  return (
      <>
        <Navbar />
        <h1 className="text-2xl font-medium dark:text-white text-center m-5">
          Manage Products
        </h1>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-blue-400 text-white rounded-lg px-5 py-2.5"
            onClick={handleButtonClick}
          >
            Add New Product
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  {" "}
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                  Billno
                </th>
                <th scope="col" className="px-6 py-3">
                  color
                </th>
                <th scope="col" className="px-6 py-3">
                  discount
                </th>
                <th scope="col" className="px-6 py-3">
                  maincategory
                </th>
                <th scope="col" className="px-6 py-3">
                  price
                </th>
                <th scope="col" className="px-6 py-3">
                  productdescription
                </th>
                <th scope="col" className="px-6 py-3">
                  productid
                </th>
                <th scope="col" className="px-6 py-3">
                  productname
                </th>
                <th scope="col" className="px-6 py-3">
                  purchasedate
                </th>
                <th scope="col" className="px-6 py-3">
                  purchasedetail
                </th>
                <th scope="col" className="px-6 py-3">
                  quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  series
                </th>
                <th scope="col" className="px-6 py-3">
                  size
                </th>
                <th scope="col" className="px-6 py-3">
                  status
                </th>
                <th scope="col" className="px-6 py-3">
                  subcategory
                </th>
              </tr>
            </thead>
            <tbody>
              {productData?.map((items, index) => {
                return (
                  <tr className="bg-white dark:bg-gray-800 border" key={index}>
                    <th scope="row" className="px-6 py-4 flex items-center">
                      <button
                        className="rounded-sm bg-blue-400 text-white p-3"
                        onClick={handleButtonClick}
                      >
                        Edit
                      </button>
                      <button className="rounded-sm bg-blue-400 text-white p-3 ml-4" onClick={()=>handleDeleteBtnClick(items.productname)}>
                        Delete
                      </button>
                    </th>
                    <td className="px-6 py-4">{items.billno}</td>
                    <td className="px-6 py-4">{items.color}</td>
                    <td className="px-6 py-4">{items.discount}</td>
                    <td className="px-6 py-4">{items.maincategory}</td>
                    <td className="px-6 py-4">{items.price}</td>
                    <td className="px-6 py-4">{items.productdescription}</td>
                    <td className="px-6 py-4">{items.productid}</td>{" "}
                    <td className="px-6 py-4">{items.productname}</td>{" "}
                    <td className="px-6 py-4">{items.purchasedate}</td>{" "}
                    <td className="px-6 py-4">{items.purchasedetail}</td>{" "}
                    <td className="px-6 py-4">{items.quantity}</td>{" "}
                    <td className="px-6 py-4">{items.series}</td>{" "}
                    <td className="px-6 py-4">{items.size}</td>{" "}
                    <td className="px-6 py-4">{items.status}</td>{" "}
                    <td className="px-6 py-4">{items.subcategory}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Footer />
    </>
  );
};

export default ManageProduct;

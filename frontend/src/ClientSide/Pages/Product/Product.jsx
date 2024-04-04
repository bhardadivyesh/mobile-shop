import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
import { useEffect, useState,useContext } from "react";
import { appContext } from "../../../Context/Context";
import ApiHelper from "../../../Helper/ApiHelper";
const Product = () =>{
  const value = useContext(appContext)
  const [productData,setProductData] = useState()
  useEffect(()=>{
    const request = {
      path: `get-product`,
    };
    const fetchData = async () => {
        const response = await ApiHelper.get(request);
        console.log(response.data);
        setProductData(response.data);
      }
    fetchData();
  },[])
  const handleCartClick = (productItems) =>{
    value.setCartItems(prevCartItems => [...prevCartItems, productItems]);
  }
    return(
        <>
        <Navbar />
        <div className="grid grid-cols-4" >
          {productData?.map((items,index)=>{
             return (
              <>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
                  <Link to="#">
                    <img
                      className="rounded-t-lg"
                      src={items?.images?.photo1?.base64}
                      alt={items.productname}
                      style={{height : "250px",width : "400px"}}
                    />
                  </Link>
                  <div className="p-5">
                    <Link to="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                       {items.productname}    {items.price}
                      </h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                     {items.productdescription}
                    </p>
                    <h3>₹{items.price}</h3>
                    <button
                      type="submit"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={()=>handleCartClick(items)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
     
      </div>
      <Footer />
        </>
    )
}
export default Product;
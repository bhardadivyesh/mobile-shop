import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
import data from "../../../../data.json"
const Product = () =>{
    return(
        <>
        <Navbar />
        <div className="grid grid-cols-4" >
      {data?.data?.vivo?.map((items) => {
        return (
          <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="#">
                <img
                  className="rounded-t-lg"
                  src={items.image}
                  alt={items.Name}
                  style={{height : "250px",width : "400px"}}
                />
              </Link>
              <div className="p-5">
                <Link to="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   {items.Name}{items.Configuration}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                 {items.Warranty}
                </p>
                <h3>₹{items.price}</h3>
                <button
                  type="submit"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
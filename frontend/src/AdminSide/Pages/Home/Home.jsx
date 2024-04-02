import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import addmaincategory from "../../../assets/Admin icons/addmaincategory.png";
import subcategory from "../../../assets/Admin icons/subcategory.png";
import newseries from "../../../assets/Admin icons/newseries.png";
import pendingorders from "../../../assets/Admin icons/pendingorders.png";
import approvedorder from "../../../assets/Admin icons/approvedorder.png";
import products from "../../../assets/Admin icons/products.png";
import addproduct from "../../../assets/Admin icons/addproduct.png";
import changeslider from "../../../assets/Admin icons/changeslider.png";
import addnewadmin from "../../../assets/Admin icons/addnewadmin.png";
import viewfeedback from "../../../assets/Admin icons/viewfeedback.png";
import users from "../../../assets/Admin icons/users.png";
import logout from "../../../assets/Admin icons/logout.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
 const handleClicks = (navigateRoute) =>{
    navigate(`${navigateRoute}`)
 }
  return (
    <>
      <Navbar />
      <h1 className="m-6 text-4xl text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-10 m-10">
        <div className="ml-10  h-56 bg-slate-300 rounded-lg border-blue-800 border-2 cursor-pointer ">
          <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">
            Category Section
          </h1>
          <div className="flex gap-7 mt-7">
            <img
              src={addmaincategory}
              alt="maincategory"
              className="ml-10"
              id="maincategory"
              onClick={() =>handleClicks("/AddMainCategory")}
            />
            <img
              src={subcategory}
              alt="maincategory"
              className="ml-10"
              onClick={() =>handleClicks("/AddSubCategory")}
            />
            <img
              src={newseries}
              alt="maincategory"
              className="ml-10"
              onClick={() =>handleClicks("/AddNewSeries")}
            />
          </div>
          <div className="flex gap-7">
            <label htmlFor="maincategory" className="ml-8 mt-3">
              Add Main <p> Category </p>
            </label>
            <label htmlFor="maincategory" className="ml-6 mt-3">
              Add Sub <p> Category </p>
            </label>
            <label htmlFor="maincategory" className="ml-8 mt-3">
              Add New <p> Series </p>
            </label>
          </div>
        </div>
        <div className="ml-10  h-56 bg-slate-300 rounded-lg border-blue-800 border-2 cursor-pointer ">
          <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">
            Order Section
          </h1>
          <div className="flex gap-7 mt-7">
            <img
              src={pendingorders}
              alt="maincategory"
              className="ml-24"
              id="maincategory"
              onClick={() =>handleClicks("/PendingOrder")}
            />
            <img
              src={approvedorder}
              alt="maincategory"
              className="ml-10"
              onClick={() =>handleClicks("/ApprovedOrder")}
            />
          </div>
          <div className="flex gap-7">
            <label htmlFor="maincategory" className="ml-24 mt-3">
              Pending <p> Orders </p>
            </label>
            <label htmlFor="maincategory" className="ml-6 mt-3">
              Approved <p> Orders </p>
            </label>
          </div>
        </div>
        <div className="ml-10  h-56 bg-slate-300 rounded-lg border-blue-800 border-2 cursor-pointer ">
          <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">
            Product Section
          </h1>
          <div className="flex gap-7 mt-7">
            <img
              src={products}
              alt="maincategory"
              className="ml-24"
              id="maincategory"
              onClick={() =>handleClicks("/ManageProduct")}
            />
            <img
              src={addproduct}
              alt="maincategory"
              className="ml-10"
              onClick={() =>handleClicks("/AddNewProduct")}
            />
          </div>
          <div className="flex gap-7">
            <label htmlFor="maincategory" className="ml-24 mt-3">
              Products
            </label>
            <label htmlFor="maincategory" className="ml-6 mt-3">
              Add products
            </label>
          </div>
        </div>
      </div>
      <div className="border-blue-800 border-2 m-20">
        <h1 className="bg-blue-800 p-6 rounded-md text-center text-white">
          General Section
        </h1>
        <div className="flex gap-7 mt-7 cursor-pointer">
          <img
            src={changeslider}
            alt="maincategory"
            className="ml-64"
            id="maincategory"
            onClick={() =>handleClicks("/changeslider")}
          />
          <img
            src={addnewadmin}
            alt="maincategory"
            className="ml-24"
            id="maincategory"
            onClick={() =>handleClicks("/AdminUser")}
          />
          <img
            src={viewfeedback}
            alt="maincategory"
            className="ml-24"
            id="maincategory"
            onClick={() =>handleClicks("/viewfeedback")}
          />
          <img
            src={users}
            alt="maincategory"
            className="ml-24"
            id="maincategory"
            onClick={() =>handleClicks("/ClientUser")}
          />
          <img
            src={logout}
            alt="maincategory"
            className="ml-24"
            id="maincategory"
            onClick={() =>handleClicks("/")}
          />
        </div>
        <div className="flex gap-7">
          <label htmlFor="maincategory" className="ml-60 mt-3">
            Change slider
          </label>
          <label htmlFor="maincategory" className="ml-16 mt-3">
            Admin Users
          </label>
          <label htmlFor="maincategory" className="ml-20 mt-3">
            View Feedback
          </label>
          <label htmlFor="maincategory" className="ml-16 mt-5">
            Client Users
          </label>
          <label htmlFor="maincategory" className="ml-24 mt-3">
            Logout
          </label>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;

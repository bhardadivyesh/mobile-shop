import { Link } from "react-router-dom";
import logo from "../../../assets/Sony product/navbar_logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const handleProductClick = (selectedOption) =>{
   console.log(selectedOption);
   navigate(`/${selectedOption}`)
    
  }
  const handleLoginClick = () =>{
    navigate("/login")
  }
  const handleSignUpClick = () =>{
    navigate("/signUp")
  }
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-10 w-auto" src={logo} alt="Sony Shop" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-white rounded-md px-1 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  
                  <select className="bg-gray-800 text-white rounded-md py-2 text-sm font-medium" onChange={(e) =>handleProductClick(e.target.value)}>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="" >Category</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="AddMainCategory">Add Main Category</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="AddSubCategory">Add Sub Category</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="AddNewSeries">Add New Series</option>
                  </select>
                 
                  <select className="bg-gray-800 text-white rounded-md py-2 text-sm font-medium" onChange={(e) =>handleProductClick(e.target.value)}>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="">Product</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="ManageProduct">Manage Product</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="AddNewProduct">Add New Product</option>  
                  </select>

                  <select className="bg-gray-800 text-white rounded-md py-2 text-sm font-medium" onChange={(e) =>handleProductClick(e.target.value)}>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="">Orders</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="PendingOrder">Pending Orders</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="ApprovedOrder">Approved Orders</option>  
                  </select>

                  <select className="bg-gray-800 text-white rounded-md py-2 text-sm font-medium" onChange={(e) =>handleProductClick(e.target.value)}>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="">Manage Users</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="ClientUser" >Client Users</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="AdminUser">Admin Users</option>  
                  </select>

                  <Link
                    to="/changeslider"
                    className="text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                 Change Slider
                  </Link>

                  
                  <Link
                    to="/viewfeedback"
                    className="text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                  View  Feedback
                  </Link>
                </div>
              </div>
            </div>
            <img className="h-8 w-8 rounded-full" src={logo} alt="" />
            <button type="submit" className="text-white pl-3" onClick={handleLoginClick}>Login</button>
            <button type="submit" className="text-white pl-3" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import logo from "../../../assets/Sony product/navbar_logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../../../Context/Context";

const Navbar = () => {
  const value = useContext(appContext)
  console.log();
  const navigate = useNavigate()
  const handleProductClick = (selectedOption) =>{
    if(selectedOption != ""){
      navigate("/product")
    }
    
  }
  const handleNavigation = (navigateRoutePath) =>{
    navigate(`${navigateRoutePath}`)
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
                    to="/home"
                    className="text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </Link>
                 
                  <Link
                    to="/aboutUs"
                    className="text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contactUs"
                    className="text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Contact Us
                  </Link>
                  <select className="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium" onChange={(e) =>handleProductClick(e.target.value)}>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="">Product</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium"  value="vivo">Vivo</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="oppo">Oppo</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="redmi">Redmi</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="realme">Realme</option>
                    <option className="rounded-md px-3 py-2 text-sm font-medium" value="sony">Sony</option>
                  </select>
                  <Link
                    to="/feedBack"
                    className="text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Feedback
                  </Link>
                </div>
              </div>
            </div>
            <img className="h-8 w-8 rounded-full" src={logo} alt="" />
            <label
             className="text-white pl-5 pr-5 cursor-pointer"
             onClick={value?.cartItems?.length === 0 ? null : () => handleNavigation('/cart')}
             >{value?.cartItems?.length}</label>
            <button type="submit" className="text-white pl-3" onClick={()=>handleNavigation('/')}>Login</button>
            <button type="submit" className="text-white pl-3" onClick={()=>handleNavigation('/signUp')}>Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

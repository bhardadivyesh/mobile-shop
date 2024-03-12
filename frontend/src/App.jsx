import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// client side component
// import Home from "./ClientSide/Pages/Home/Home"
// import AboutUs from './ClientSide/Pages/AboutUs/AboutUs';
// import ContactUs from "./ClientSide/Pages/ContactUs/ContactUs"
// import Feedback from './ClientSide/Pages/Feedback/Feedback';
// import Product from "./ClientSide/Pages/Product/Product"
// import Login from "./ClientSide/Pages/Login/Login"
// import SignUp from './ClientSide/Pages/SignUp/SignUp';

// server side component
import Home from "./AdminSide/Pages/Home/Home"
import ViewFeedback from "./AdminSide/Pages/ViewFeedback/ViewFeedback"
import ChangeSlider from "./AdminSide/Pages/ChangeSlider/ChangeSlider"
import AddMainCategory from "./AdminSide/Category/AddMainCategory/AddMainCategory"
import AddSubCategory from "./AdminSide/Category/AddSubCategory/AddSubCategory"
import AddNewSeries from "./AdminSide/Category/AddNewSeries/AddNewSeries"
import ManageProduct from "./AdminSide/Product/ManageProduct/ManageProduct"
import AddNewProduct from "./AdminSide/Product/AddNewProduct/AddNewProduct"
import ClientUser from "./AdminSide/ManageUsers/ClientUser/ClientUser"
import AdminUser from "./AdminSide/ManageUsers/AdminUser/AdminUser"
import PendingOrder from "./AdminSide/Orders/PendingOrder/PendingOrder"
import ApprovedOrder from "./AdminSide/Orders/ApprovedOrder/ApprovedOrder"

function App() {
  return (
    <Router>
      <Routes>
        {/* client side routes */}
        {/* <Route path="/" element={<Home />} /> 
         <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />}/>
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} /> */}

        {/* admin side routes */}
         <Route path='/' element={<Home /> }/>
        <Route path='/changeslider' element={<ChangeSlider />}/>
        <Route path='/viewfeedback' element={<ViewFeedback />} />
        <Route path='/addMainCategory' element={<AddMainCategory />}/>
        <Route path='/addSubCategory' element={<AddSubCategory />}/>
        <Route path='/addNewSeries' element={<AddNewSeries />}/>
        <Route path='/ManageProduct' element={<ManageProduct />}/>
        <Route path='/AddNewProduct' element={<AddNewProduct />}/>
        <Route path='/ClientUser' element={<ClientUser />} />
        <Route path="/AdminUser" element={<AdminUser />} />
        <Route path='/PendingOrder' element={<PendingOrder />} />
        <Route path='/ApprovedOrder' element={<ApprovedOrder />} /> 
      

      </Routes>
    </Router>
  );
}

export default App;
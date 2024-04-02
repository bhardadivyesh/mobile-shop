import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homeclient from "./ClientSide/Pages/Home/HomeClient"
import AboutUs from './ClientSide/Pages/AboutUs/AboutUs';
import ContactUs from "./ClientSide/Pages/ContactUs/ContactUs"
import Feedback from './ClientSide/Pages/Feedback/Feedback';
import Product from "./ClientSide/Pages/Product/Product"
import Login from "./Authentication/Login/Login"
import SignUp from './Authentication/SignUp/SignUp';
import Cart from "./ClientSide/Pages/Cart/Cart"
import Invoice from "./ClientSide/Pages/Invoice/Invoice"
import axios from 'axios';
import { useEffect, useState } from 'react';
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
import 'react-toastify/dist/ReactToastify.css';
import {appContext} from "./Context/Context"

function App() {
  const [cartItems,setCartItems] = useState([])
  const [users, setUsers] = useState([]);
  const [registrationData,setRegistrationData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/get-user-registration')
      .then((res) => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);
 


  return (
    <appContext.Provider value={{cartItems,setCartItems,registrationData,setRegistrationData}}>
    <Router>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
        {users.map(user => {
          if (user.role?.admin) {
            return (
              <React.Fragment key={user.id}>
                <Route path='/adminHome' element={<Home />} />
                <Route path='/changeslider' element={<ChangeSlider />} />
                <Route path='/viewfeedback' element={<ViewFeedback />} />
                <Route path='/addMainCategory' element={<AddMainCategory />} />
                <Route path='/addSubCategory' element={<AddSubCategory />} />
                <Route path='/addNewSeries' element={<AddNewSeries />} />
                <Route path='/ManageProduct' element={<ManageProduct />} />
                <Route path='/AddNewProduct' element={<AddNewProduct />} />
                <Route path='/ClientUser' element={<ClientUser />} />
                <Route path="/AdminUser" element={<AdminUser />} />
                <Route path='/PendingOrder' element={<PendingOrder />} />
                <Route path='/ApprovedOrder' element={<ApprovedOrder />} />
              </React.Fragment>
            );
          } else if (user.role?.client) {
            return (
              <React.Fragment key={user.id}>
                <Route path="/home" element={<Homeclient />} />
                <Route path='/aboutUs' element={<AboutUs />} />
                <Route path='/contactUs' element={<ContactUs />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/product' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/invoice' element={<Invoice />} />


                
              </React.Fragment>
            );
          } else {
            
            console.log(`${user.name} has an undefined role.`);
            return null; // or some default route
          }
        })}
      </Routes>
    </Router>
    </appContext.Provider>
  );
}

export default App;

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { appContext } from "../../../Context/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const value = useContext(appContext);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(value.cartItems);
  }, [value.cartItems]);
  const handlePlus = (item, index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
  };
  const handleMinus = (item, index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity--;
    setCartItems(updatedCartItems);
  };
  const calculateTotalPrice = (item) => {
    const quantity = parseInt(item.quantity);
    const price = parseFloat(item.price);
    return quantity * price;
  };
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + calculateTotalPrice(item), 0);
  };
  const totalPrice = calculateTotal(cartItems);

  const calculateTotalDiscount = (item) => {
    const quantity = parseInt(item.quantity);
    const price = parseFloat(item.discount);
    return quantity * price;
  };
  const calculateDiscount = (items) => {
    return items.reduce(
      (total, item) => total + calculateTotalDiscount(item),
      0
    );
  };
  const totalDiscount = calculateDiscount(cartItems);
  const finalPrice = totalPrice - totalDiscount;

  const handlePlaceOrderClick = () => {
    navigate("/invoice");
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          {value.cartItems.map((items, index) => {
            return (
              <table className="m-10" key={index}>
                <tr>
                  <td rowSpan="3">
                    <img
                      src={items.images.photo1.base64}
                      className="h-40 w-28"
                    />
                  </td>
                  <h1>
                    <span className="font-bold">Product Name : </span>
                    {items.productname}
                  </h1>
                </tr>
                <tr>
                  <h1>
                    <span className="font-bold">Color : </span> {items.color}
                  </h1>
                  <h2>
                    <span className="font-bold">Size : </span>
                    {items.size}
                  </h2>
                  <h3>
                    <span className="font-bold">Price : </span>₹{items.price}
                  </h3>
                </tr>
                <tr>
                  <h1>
                    <span className="font-bold">Description : </span>
                    {items.productdescription}
                  </h1>
                </tr>
                <tr>
                  <button
                    className="border-solid border-2 border-black w-9 h-7 rounded-full"
                    disabled={
                      value.cartItems[index].quantity == 1 ? true : false
                    }
                    onClick={() => handleMinus(items, index)}
                  >
                    -
                  </button>
                  <label className="ml-4">
                    {value.cartItems[index].quantity}
                  </label>
                  <button
                    className="border-solid border-2 border-black w-9 h-7 rounded-full ml-4"
                    onClick={() => handlePlus(items, index)}
                  >
                    +
                  </button>
                </tr>
              </table>
            );
          })}
        </div>
        <div className="m-10">
          <h1 className="pl-32 font-medium uppercase">Price Detail </h1>
          <br />
          <h2>
            Price (2 items)<span className="pl-44">₹{totalPrice}</span>
          </h2>
          <h2 className="pt-5">
            Discount
            <span className="pl-52 text-green-700">₹{totalDiscount}</span>
          </h2>
          <h2 className="pt-5">
            Delivery Charges<span className="pl-40 text-green-700">₹Free</span>
          </h2>
          <h2 className="pt-5">
            Secured Packaging Fee
            <span className="pl-28 text-green-700">₹Free</span>
          </h2>
          <h2 className="pt-5 font-bold">
            Total Amount<span className="pl-44">₹{finalPrice}</span>
          </h2>
          <button
            className="text-white bg-blue-700 focus:ring-40 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 pl-6 m-6 ml-36"
            onClick={handlePlaceOrderClick}
          >
            Place order
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;

import freeshipping from "../../../assets/Footer icons/free-shipping.png";
import clock from "../../../assets/Footer icons/clock.png"
import call from "../../../assets/Footer icons/call.png"

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 p-10 bg-gray-900">
        <div>
          <img
            src={freeshipping}
            alt="free shipping"
            className="h-20 align-middle text-center pl-52"
          />
          <h1 className="text-white text-2xl text-center">FREE SHIPPING</h1>
          <h4 className="text-white text-center">
            We Provide Free Shipping Across All India</h4>
            <h4 className="text-white text-center"> Without Any Type Of
            Charge.
          </h4>
        </div>
        <div>
        <img
            src={clock}
            alt="free shipping"
            className="h-20 align-middle text-center pl-52"
          />
          <h1 className="text-white text-2xl text-center">10 DAYS MONEY BACK</h1>
          <h4 className="text-white text-center">if Any Type Of Manufacturing Defects.We Provide</h4>
            <h4 className="text-white text-center"> 10 Day Money Back Offer To Customer.</h4>
        </div>
        <div>
        <img
            src={call}
            alt="free shipping"
            className="h-20 align-middle text-center pl-52"
          />
          <h1 className="text-white text-2xl text-center">SUPPORT 24/7</h1>
          <h4 className="text-white text-center">We Provide 24/7 Support To Our Customers Via</h4>
            <h4 className="text-white text-center"> Email & HelpLine Number.</h4>
        </div>
      </div>
      <div className="text-white h-16 bg-slate-950 text-center pt-5">
      Sony Shop © 2024. All Rights Reserved. Designed by BHARADA DIVYESH
      </div>
    </>
  );
};

export default Footer;

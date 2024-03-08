import Navbar from "../../Component/Navbar/Navbar"
import Footer from "../../Component/Footer/Footer"
import imageslider4 from "../../../assets/Sony product/imageslider4.avif"

const ApprovedOrder = () => {
  return (
    <>
    <Navbar />
    <h1 className="text-2xl font-medium dark:text-white text-center m-5">Approved Orders</h1>
    <div className="flex justify-center">
  <label className="font-medium dark:text-white m-5">Select Order Status : </label>
  <select>
      <option value="shipped">Shipped</option>
      <option value="Delivered">Delivered</option>
    </select>
    <button className="text-white bg-blue-600 rounded-lg w-20 h-10 mt-3 hover:bg-green-400">Update</button>
</div>

<div className="relative overflow-x-auto overflow-y-hidden overflow-hidden shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" >
                Select	
                </th>
                <th scope="col">
                Order ID
                </th>
                <th scope="col">
                Product Name
                </th>
                <th scope="col" >
                Price
                </th>
                <th scope="col" className="px-6 py-3">
                Purchased Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                Total Amount	
                </th>
                <th scope="col" className="px-6 py-3">
                Company
                </th>
                <th scope="col" className="px-6 py-3">
                Product Color
                </th>
                <th scope="col" className="px-6 py-3">
                Image
                </th>
                <th scope="col" className="px-6 py-3">
                Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                Delivery Address
                </th>
                <th scope="col" className="px-6 py-3">
                Customer Mobile No.
                </th>
                <th scope="col" className="px-6 py-3">
                Customer Email
                </th>
                <th scope="col" className="px-6 py-3">
                Order Status
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800 border">
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td className="px-6 py-4">
                102	
                </td>
                <td className="px-6 py-4">
                SONY USB CABLE
                </td>
                <td className="px-6 py-4">
                299
                </td>
                <td className="px-6 py-4">
                1
                </td>
                <td className="px-6 py-4">
                299
                </td><td className="px-6 py-4">
                ACCESSORIES
                </td><td className="px-6 py-4">
                WHITE
                </td><td className="px-6 py-4">
                <img  src={imageslider4} alt="image"/>
                </td><td className="px-6 py-4">
                yash nasit
                </td><td className="px-6 py-4">
                AT.MOTI GHANSARI, TA.KESHOD,DIS.JUNAGADH.
                </td><td className="px-6 py-4">
                9737557068
                </td><td className="px-6 py-4">
                YASH.NASIT111@GMAIL.COM
                </td>
                <td className="px-6 py-4">
                Delivered
                </td>
            </tr>
        </tbody>
    </table>
</div>

    <Footer />
    </>
  )
}

export default ApprovedOrder
import Navbar from "../../Component/Navbar/Navbar"
import Footer from "../../Component/Footer/Footer"
import imageslider4 from "../../../assets/Sony product/imageslider4.avif"

const PendingOrder = () => {
  return (
    <>
    <Navbar />
    <h1 className="text-2xl font-medium dark:text-white text-center m-5">Pending Orders</h1>
    

<div className="relative overflow-x-auto overflow-y-hidden overflow-hidden shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" >
                    Action
                </th>
                <th scope="col">
                Product Name
                </th>
                <th scope="col">
                Price
                </th>
                <th scope="col" >
                Stock Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                Purchased Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                Model / Type
                </th>
                <th scope="col" className="px-6 py-3">
                Image
                </th>
                <th scope="col" className="px-6 py-3">
                Customer ID
                </th>
                <th scope="col" className="px-6 py-3">
                Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                Customer Address
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
                   <button className="rounded-sm bg-blue-500 text-white p-3">Approve</button>
                </th>
                <td className="px-6 py-4">
                XPERIA R1 DUAL
                </td>
                <td className="px-6 py-4">
                7999
                </td>
                <td className="px-6 py-4">
                7
                </td>
                <td className="px-6 py-4">
                1
                </td>
                <td className="px-6 py-4">
                XPERIA R SERIES
                </td><td className="px-6 py-4">
               <img src={imageslider4} alt="image"/>
                </td><td className="px-6 py-4">
                0002
                </td><td className="px-6 py-4">
                bharada divyesh
                </td><td className="px-6 py-4">
                AT.CHANDIGADH, TA.KESHOD,DIS.JUNAGADH.
                </td><td className="px-6 py-4">
                9327511543
                </td><td className="px-6 py-4">
                bhardadivyesh@GMAIL.COM
                </td><td className="px-6 py-4">
                PENDING
                </td>
            </tr>
        </tbody>
    </table>
</div>

    <Footer />
    </>
  )
}

export default PendingOrder
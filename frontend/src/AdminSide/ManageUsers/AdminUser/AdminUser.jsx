import Navbar from "../../Component/Navbar/Navbar"
import Footer from "../../Component/Footer/Footer"
import imageslider4 from "../../../assets/Sony product/imageslider4.avif"
const AdminUser = () => {
  return (
    
      <>
    <Navbar />
    <h1 className="text-2xl font-medium dark:text-white text-center m-5">Manage Users (Admin Side)</h1>
    

<div className="relative overflow-x-auto overflow-y-hidden overflow-hidden shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" >
                    Action
                </th>
                <th scope="col">
                User ID
                </th>
                <th scope="col">
                Name
                </th>
                <th scope="col" >
                Email
                </th>
                <th scope="col" className="px-6 py-3">
                Password
                </th>
                <th scope="col" className="px-6 py-3">
                Gender
                </th>
                <th scope="col" className="px-6 py-3">
                Address
                </th>
                <th scope="col" className="px-6 py-3">
                DOB
                </th>
                <th scope="col" className="px-6 py-3">
                Country
                </th>
                <th scope="col" className="px-6 py-3">
                State
                </th>
                <th scope="col" className="px-6 py-3">
                City
                </th>
                <th scope="col" className="px-6 py-3">
                Contact No.
                </th>
                <th scope="col" className="px-6 py-3">
                Alternative Contact No.
                </th>
                <th scope="col" className="px-6 py-3">
                Profile Picture
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800 border">
                <th scope="row" className="px-6 py-4">
                   <button className="rounded-sm bg-blue-500 text-white p-3">Delete</button>
                </th>
                <td className="px-6 py-4">
                0002
                </td>
                <td className="px-6 py-4">
                bharada divyesh
                </td>
                <td className="px-6 py-4">
                bhardadivyesh@GMAIL.COM
                </td>
                <td className="px-6 py-4">
                0000
                </td>
                <td className="px-6 py-4">
                MALE
                </td><td className="px-6 py-4">
                AT.CHANDIGADH, TA.KESHOD,DIS.JUNAGADH.
                </td><td className="px-6 py-4">
                2004-06-20
                </td><td className="px-6 py-4">
                INDIA
                </td><td className="px-6 py-4">
                GUJARAT
                </td><td className="px-6 py-4">
                KESHOD
                </td><td className="px-6 py-4">
                9327511543
                </td><td className="px-6 py-4">
                9924240657
                </td><td className="px-6 py-4">
                    <img src={imageslider4} alt="image" className="h-16 w-14"/>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    <Footer />
    </>
    
  )
}

export default AdminUser
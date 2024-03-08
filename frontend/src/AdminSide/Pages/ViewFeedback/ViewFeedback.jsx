import Navbar from "../../Component/Navbar/Navbar"
import Footer from "../../Component/Footer/Footer"
const ViewFeedback = () => {
  return (
    <>
    <Navbar />
    <h1 className="text-2xl font-medium dark:text-white text-center m-5">Customer Feedback</h1>
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Feedback
                </th>
                <th scope="col" className="px-6 py-3">
                    Mobile Number
                </th>
                <th scope="col" className="px-6 py-3">
                   Email
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800 border">
                <th scope="row" className="px-6 py-4">
                   <button className="rounded-sm bg-blue-950 text-white p-3">Delete</button>
                </th>
                <td className="px-6 py-4">
                   Bharada divyesh
                </td>
                <td className="px-6 py-4">
                    Nice order system
                </td>
                <td className="px-6 py-4">
                    9327511543
                </td>
                <td className="px-6 py-4">
                    admin@gmail.com
                </td>
            </tr>
        </tbody>
    </table>
</div>

    <Footer />
    </>
  )
}

export default ViewFeedback;
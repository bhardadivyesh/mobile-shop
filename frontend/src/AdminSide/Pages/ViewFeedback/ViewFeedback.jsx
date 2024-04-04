import Navbar from "../../Component/Navbar/Navbar"
import Footer from "../../Component/Footer/Footer"
import { useEffect } from "react"
import { useState } from "react"
import ApiHelper from "../../../Helper/ApiHelper"
const ViewFeedback = () => {
    const [feedbackData,setFeedbackData] = useState([])
    useEffect(()=>{
        const request = {
            path: `get-feedback`,
          };
          const fetchData = async () => {
              const response = await ApiHelper.get(request);
              console.log(response.data);
              setFeedbackData(response.data);
            }
          fetchData();
    },[])
const handleDeleteFeedback = async(email) =>{
    const request ={
      path:`delete-feedback`,
      data : email
    }
      await ApiHelper.delete(request)
    }
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
            {feedbackData?.map((items,index)=>{
                return(
                    <tr className="bg-white dark:bg-gray-800 border" key={index}>
                    <th scope="row" className="px-6 py-4">
                       <button className="rounded-sm bg-blue-950 text-white p-3" onClick={() =>handleDeleteFeedback(items.email)}>Delete</button>
                    </th>
                    <td className="px-6 py-4">
                       {items.name}
                    </td>
                    <td className="px-6 py-4">
                      {items.feedbackData}
                    </td>
                    <td className="px-6 py-4">
                    {items.number}
                    </td>
                    <td className="px-6 py-4">
                    {items.email}
                    </td>
                </tr>
                    
                )
                 
            })}
          
        </tbody>
    </table>
</div>

    <Footer />
    </>
  )
}

export default ViewFeedback;
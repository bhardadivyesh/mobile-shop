import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
const AdminUser = () => {
  // const [reRenderComponent, setRerenderComponent] = useState(true);
  const [users, setUsers] = useState();
  const [reRenderComponent,setRerenderComponent] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:3000/get-user-registration").then((res) => {
      setUsers(res.data);
    });
  }, [reRenderComponent]);

  const adminUsers = users?.filter((user) => user.role.admin);
  const handleDeleteButtonClick = (email) => {
    axios
      .delete("http://localhost:3000/delete-user-registration", {
        data: { email: email },
      })
      .then((response) => {
        if (response.status === 200) {
          setRerenderComponent((prevState) => !prevState);
        }
      })
      .catch((error) => {
        console.error("Error deleting feedback:", error);
      });
  };
  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-medium dark:text-white text-center m-5">
        Manage Users (Admin Side)
      </h1>

      <div className="relative overflow-x-auto overflow-y-hidden overflow-hidden shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col">Action</th>
              <th scope="col">User ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
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
            {adminUsers?.map((items, index) => {
              return (
                <tr className="bg-white dark:bg-gray-800 border" key={index}>
                  <th scope="row" className="px-6 py-4">
                    <button className="rounded-sm bg-blue-500 text-white p-3" onClick={()=>handleDeleteButtonClick(items.email)}>
                      Delete
                    </button>
                  </th>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">{items.name}</td>
                  <td className="px-6 py-4">{items.email}</td>
                  <td className="px-6 py-4">{items.password}</td>
                  <td className="px-6 py-4">{items.gender}</td>
                  <td className="px-6 py-4">{items.address}</td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">{items.state}</td>
                  <td className="px-6 py-4">{items.city}</td>
                  <td className="px-6 py-4">{items.contactno1}</td>
                  <td className="px-6 py-4">{items.contactno2}</td>
                  <td className="px-6 py-4">
                    <img src={items.photo} alt="image" className="h-16 w-14" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default AdminUser;

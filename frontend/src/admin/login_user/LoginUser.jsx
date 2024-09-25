import React, { useEffect, useState } from "react";
import Dashbord from "../Dashbord";
import "./login_user.css";
import axios from "axios";

export default function LoginUser() {
  const [User, setUser] = useState([]);

  useEffect(() => {
    // Retrieve token from local storage or session storage
    const token = localStorage.getItem("token"); // Or sessionStorage.getItem("token")

    axios
      .get("https://53w357tb-4000.inc1.devtunnels.ms/user/get", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  // Function to handle delete action
  const deleteUser = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`https://53w357tb-4000.inc1.devtunnels.ms/user/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the delete request
        },
      })
      .then((response) => {
        console.log("User deleted", response);
        setUser(User.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the user!", error);
      });
  };

  return (
    <>
      <Dashbord />
      <div className="table-info">
        <h1>Login User Info</h1>
        <table className="table user-info-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {User.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Dashbord from "../Dashbord";
import "./login_user.css";
import axios from "axios";

export default function LoginUser() {
  const [User, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://53w357tb-4000.inc1.devtunnels.ms/user/get")
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
    axios
      .delete(`https://53w357tb-4000.inc1.devtunnels.ms/user/delete/${id}`)
      .then((response) => {
        console.log("User deleted", response);
        // Update the user list after deletion
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

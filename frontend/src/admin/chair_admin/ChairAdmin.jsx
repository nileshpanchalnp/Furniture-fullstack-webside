import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ChairAdmin.css";
import Dashbord from "../Dashbord";

const ChairAdmin = () => {
  const [chairs, setChairs] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for form inputs
  const [chair_name, setChairName] = useState("");
  const [option, setOption] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState("");
  const [currentPoster, setCurrentPoster] = useState(null); // To hold the current poster image URL
  const [editMode, setEditMode] = useState(false); // To track if editing
  const [currentChairId, setCurrentChairId] = useState(null); // To track the current chair id being edited

  useEffect(() => {
    fetchChairs();
  }, []);

  // Fetch chairs from API
  const fetchChairs = () => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    axios
      .get("https://53w357tb-4000.inc1.devtunnels.ms/chair/get", {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      })
      .then((response) => {
        setChairs(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  };

  // Create or update chair
  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    const formData = new FormData();
    formData.append("chair_name", chair_name);
    formData.append("option", option);
    formData.append("price", price);

    // Append the poster only if a new file has been selected
    if (poster) {
      formData.append("poster", poster);
    }

    try {
      if (editMode) {
        // Update the chair
        await axios.put(
          `https://53w357tb-4000.inc1.devtunnels.ms/chair/update/${currentChairId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`, // Include the JWT token
            },
          }
        );
        alert("Updated successfully");
        setEditMode(false); // Exit edit mode
      } else {
        // Create a new chair
        await axios.post(
          "https://53w357tb-4000.inc1.devtunnels.ms/chair/create/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`, // Include the JWT token
            },
          }
        );
        alert("Created successfully");
      }
      resetForm();
      fetchChairs(); // Fetch the updated list of chairs
    } catch (error) {
      console.log("error", error);
      alert("Failed");
    }
  };

  // Reset form
  const resetForm = () => {
    setChairName("");
    setOption("");
    setPrice("");
    setPoster("");
    setCurrentPoster(null);
    setEditMode(false);
    setCurrentChairId(null);
  };

  // Handle delete action
  const deleteChair = (id) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    axios
      .delete(`https://53w357tb-4000.inc1.devtunnels.ms/chair/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token
        },
      })
      .then((response) => {
        fetchChairs(); // Refresh the chair list after deletion
      })
      .catch((error) => {
        console.error("There was an error deleting the chair!", error);
      });
  };

  // Handle edit action (populate form fields with the selected chair's data)
  const editChair = (chair) => {
    setChairName(chair.chair_name);
    setOption(chair.option);
    setPrice(chair.price);
    setCurrentPoster(chair.poster); // Set the current poster image URL
    setPoster(null); // Clear any new poster that might have been selected
    setCurrentChairId(chair._id);
    setEditMode(true); // Set the mode to edit
  };

  return (
    <>
      <Dashbord />
      <div className="chair-form">
        <h1>{editMode ? "Edit Chair" : "Admin Chair"}</h1>
        <form onSubmit={handleCreateOrUpdate} className="input-form">
          <input
            type="text"
            name="chair_name"
            placeholder="Enter Chair Name"
            value={chair_name}
            onChange={(e) => setChairName(e.target.value)}
          />
          <input
            type="text"
            name="option"
            placeholder="Enter Del amount"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          />
          <input
            type="text"
            name="price"
            placeholder="Enter Sell Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          {/* Show current poster image in edit mode */}
          {editMode && currentPoster && (
            <div>
              <p>Current Poster:</p>
              <img
                src={`https://53w357tb-4000.inc1.devtunnels.ms/chair/img/${currentPoster}`}
                alt="Current Chair Poster"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            name="poster"
            onChange={(e) => setPoster(e.target.files[0])} // Update the poster state with the new file
          />
          <button type="submit" className="btn btn-light">
            {editMode ? "Update" : "Submit"}
          </button>
          {editMode && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={resetForm}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Chair List */}
      <div className="admin-chair-box">
        {loading ? (
          <h2>Loading Chairs...</h2>
        ) : (
          chairs.map((chair) => (
            <div className="card-one" key={chair._id}>
              <img
                src={`https://53w357tb-4000.inc1.devtunnels.ms/chair/img/${chair.poster}`}
                alt={chair.chair_name}
              />
              <div className="card-one-item-name">
                <p className="product-name">{chair.chair_name}</p>
                <p>
                  From. <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                  {chair.price} &nbsp;
                  <del>
                    <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                    {chair.option}
                  </del>
                </p>
              </div>
              <div className="product-e-d-btn">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteChair(chair._id)}
                >
                  Delete
                </button>{" "}
                &nbsp;
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => editChair(chair)}
                >
                  Edit
                </button>
              </div>
              <br />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ChairAdmin;

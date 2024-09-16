import React, { useEffect, useState } from "react";
import Dashbord from "../Dashbord";
import axios from "axios";

const BedAdmin = () => {
  // State for fetching bed data
  const [beds, setBeds] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  // Form input states
  const [bed_name, setBedName] = useState("");
  const [option, setOption] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState("");
  const [editMode, setEditMode] = useState(false); // Track if we're in edit mode
  const [currentBedId, setCurrentBedId] = useState(null); // Track the bed being edited

  // Fetch the bed data from the API
  useEffect(() => {
    axios
      .get("https://53w357tb-4000.inc1.devtunnels.ms/bed/get")
      .then((response) => {
        console.log(response.data); // Log the response for debugging
        setBeds(response.data.data); // Adjust according to your API response structure
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  // Function to create or update a bed
  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("bed_name", bed_name);
    formData.append("option", option);
    formData.append("price", price);
    if (poster) {
      formData.append("poster", poster); // Append poster only if it's selected
    }

    try {
      if (editMode) {
        // Update bed
        await axios.put(
          `https://53w357tb-4000.inc1.devtunnels.ms/bed/update/${currentBedId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert("Bed updated successfully");
        setEditMode(false); // Exit edit mode
      } else {
        // Create new bed
        await axios.post(
          "https://53w357tb-4000.inc1.devtunnels.ms/bed/create/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert("Bed created successfully");
      }

      // Reset form
      setBedName("");
      setOption("");
      setPrice("");
      setPoster("");
      setCurrentBedId(null);

      // Fetch updated bed data
      axios
        .get("https://53w357tb-4000.inc1.devtunnels.ms/bed/get")
        .then((response) => {
          setBeds(response.data.data);
        });
    } catch (error) {
      console.log("error", error);
      alert("Failed");
    }
  };

  // Function to delete a bed
  const deleteBed = async (id) => {
    try {
      await axios.delete(
        `https://53w357tb-4000.inc1.devtunnels.ms/bed/delete/${id}`
      );
      alert("Bed deleted successfully");

      // Fetch updated bed data
      const updatedBeds = beds.filter((bed) => bed._id !== id);
      setBeds(updatedBeds);
    } catch (error) {
      console.error("There was an error deleting the bed!", error);
      alert("Failed to delete bed");
    }
  };

  // Function to edit a bed (populate the form with existing data)
  const editBed = (bed) => {
    setBedName(bed.bed_name);
    setOption(bed.option);
    setPrice(bed.price);
    setCurrentBedId(bed._id); // Set current bed ID for editing
    setEditMode(true); // Enter edit mode
  };

  return (
    <>
      <Dashbord />
      <div className="chair-form">
        <h1>{editMode ? "Edit Bed" : "Admin Bed"}</h1>
        <form onSubmit={handleCreateOrUpdate} className="input-form">
          <input
            type="text"
            name="bed_name"
            placeholder="Enter bed Name"
            value={bed_name}
            onChange={(e) => setBedName(e.target.value)}
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
          <input
            type="file"
            accept="image/*"
            name="poster"
            onChange={(e) => setPoster(e.target.files[0])} // Use the handleChange to update the state with the file
          />
          <button type="submit" className="btn btn-light">
            {editMode ? "Update" : "Submit"}
          </button>
          {editMode && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                // Reset form if canceling edit
                setEditMode(false);
                setBedName("");
                setOption("");
                setPrice("");
                setPoster("");
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Bed List */}
      <div className="admin-chair-box">
        {loading ? (
          <h2>Loading Beds...</h2>
        ) : (
          beds.map((bed) => (
            <div className="card-one" key={bed._id}>
              <img
                src={`https://53w357tb-4000.inc1.devtunnels.ms/bed/img/${bed.poster}`}
                alt={bed.bed_name}
              />
              <div className="card-one-item-name">
                <p className="product-name">{bed.bed_name}</p>
                <p>
                  From. <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                  {bed.price} &nbsp;
                  <del>
                    <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                    {bed.option}
                  </del>
                </p>
              </div>
              <div className="product-e-d-btn">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteBed(bed._id)}
                >
                  Delete
                </button>{" "}
                &nbsp;
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => editBed(bed)}
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

export default BedAdmin;

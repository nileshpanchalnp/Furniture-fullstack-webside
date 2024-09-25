import React, { useEffect, useState } from "react";
import Dashbord from "../Dashbord";
import axios from "axios";

const SofaAdmin = () => {
  // sofa get
  const [sofas, setSofa] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form input states
  const [sofa_name, setSofaName] = useState("");
  const [option, setOption] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState("");
  const [editMode, setEditMode] = useState(false); // Track if we're in edit mode
  const [currentSofaId, setCurrentSofaId] = useState(null); // Track the sofa being edited

  // Retrieve the token from localStorage (or any secure storage you're using)
  const token = localStorage.getItem("token");

  // Fetch sofas from the server
  useEffect(() => {
    axios
      .get("https://53w357tb-4000.inc1.devtunnels.ms/sofa/get", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
        },
      })
      .then((response) => {
        console.log(response.data); // Log the response for debugging
        setSofa(response.data.data); // Adjust according to your API response structure
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [token]);

  // Create or update sofa
  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("sofa_name", sofa_name);
    formData.append("option", option);
    formData.append("price", price);
    if (poster) {
      formData.append("poster", poster); // Append poster only if a new image is selected
    }

    try {
      if (editMode) {
        // Update sofa
        await axios.put(
          `https://53w357tb-4000.inc1.devtunnels.ms/sofa/update/${currentSofaId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`, // Include the JWT token
            },
          }
        );
        alert("Sofa updated successfully");
        setEditMode(false); // Exit edit mode
      } else {
        // Create new sofa
        await axios.post(
          "https://53w357tb-4000.inc1.devtunnels.ms/sofa/create/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`, // Include the JWT token
            },
          }
        );
        alert("Sofa created successfully");
      }

      // Reset form
      setSofaName("");
      setOption("");
      setPrice("");
      setPoster("");
      setCurrentSofaId(null);

      // Fetch updated sofa data
      axios
        .get("https://53w357tb-4000.inc1.devtunnels.ms/sofa/get", {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token
          },
        })
        .then((response) => {
          setSofa(response.data.data);
        });
    } catch (error) {
      console.log("error", error);
      alert("Failed");
    }
  };

  // Delete sofa
  const deleteSofa = async (id) => {
    try {
      await axios.delete(
        `https://53w357tb-4000.inc1.devtunnels.ms/sofa/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token
          },
        }
      );
      alert("Sofa deleted successfully");

      // Update sofa list after deletion
      const updatedSofas = sofas.filter((sofa) => sofa._id !== id);
      setSofa(updatedSofas);
    } catch (error) {
      console.error("There was an error deleting the sofa!", error);
      alert("Failed to delete sofa");
    }
  };

  // Edit sofa (populate form for editing)
  const editSofa = (sofa) => {
    setSofaName(sofa.sofa_name);
    setOption(sofa.option);
    setPrice(sofa.price);
    setCurrentSofaId(sofa._id); // Set the ID of the sofa being edited
    setEditMode(true); // Enable edit mode
  };

  return (
    <>
      <Dashbord />
      <div className="chair-form">
        <h1>{editMode ? "Edit Sofa" : "Sofa Admin"}</h1>
        <form className="input-form" onSubmit={handleCreateOrUpdate}>
          <input
            type="text"
            name="sofa_name"
            placeholder="Enter Sofa Name"
            value={sofa_name}
            onChange={(e) => setSofaName(e.target.value)}
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
            onChange={(e) => setPoster(e.target.files[0])}
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
                setSofaName("");
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

      {/* Sofa List */}
      <div className="admin-chair-box">
        {loading ? (
          <h2>Loading Sofas...</h2>
        ) : (
          sofas.map((sofa) => (
            <div className="card-one" key={sofa._id}>
              <img
                src={`https://53w357tb-4000.inc1.devtunnels.ms/sofa/img/${sofa.poster}`}
                alt={sofa.sofa_name}
              />
              <div className="card-one-item-name">
                <p className="product-name">{sofa.sofa_name}</p>
                <p>
                  From. <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                  {sofa.price} &nbsp;
                  <del>
                    <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                    {sofa.option}
                  </del>
                </p>
              </div>
              <div className="product-e-d-btn">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteSofa(sofa._id)}
                >
                  Delete
                </button>{" "}
                &nbsp;
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => editSofa(sofa)}
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

export default SofaAdmin;

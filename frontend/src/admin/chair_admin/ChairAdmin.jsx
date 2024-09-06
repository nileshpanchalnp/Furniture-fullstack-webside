import React, { useState } from "react";
import axios from "axios";
import "./ChairAdmin.css";
import Dashbord from "../Dashbord";

const ChairAdmin = () => {

  const [chair_name, setChairName] = useState("");
  const [option, setOption] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState("");

  const handleCreateData =async (e) =>{
    e.preventDefault();

    const formData = new FormData();
    formData.append("chair_name", chair_name);
    formData.append("option", option);
    formData.append("price", price);
    formData.append("poster", poster);

    try{
      await axios.post("https://53w357tb-4000.inc1.devtunnels.ms/chair/create/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setChairName("");
      setOption("");
      setPrice("");
      setPoster("");
      alert("Created Success")
    }catch (error){
    console.log("error",error)
    alert("Fali")
    }
  }
  return (
    <>
    <Dashbord/>
      <div className="chair-form">
        <h1>Admin Chair</h1>
        <form onSubmit={handleCreateData} className="input-form">
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
          <input
            type="file"
            accept="image/*"
            name="poster"
            // value={poster}
            onChange={(e) => setPoster(e.target.files[0])} // Use the handleChange to update the state with the file
          />
          <button type="submit" className="btn btn-light" >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ChairAdmin;

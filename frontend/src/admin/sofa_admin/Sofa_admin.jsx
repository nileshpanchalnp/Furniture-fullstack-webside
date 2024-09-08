import React, { useState } from 'react';
import Dashbord from '../Dashbord';
import axios from 'axios';

const SofaAdmin = () => {
  const [sofa_name, setChairName] = useState("");
  const [option, setOption] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState("");

  const handleCreateData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("sofa_name", sofa_name);
    formData.append("option", option);
    formData.append("price", price);
    formData.append("poster", poster);

    try {
      await axios.post(
        "https://53w357tb-4000.inc1.devtunnels.ms/sofa/create/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setChairName("");
      setOption("");
      setPrice("");
      setPoster("");
      alert("Created Success");
    } catch (error) {
      console.log("error", error);
      alert("Fali");
    }
  };
    return (
      <>
        <Dashbord />
        <div className="chair-form">
          <h1>Sofa Admin</h1>
          <form className="input-form" onSubmit={handleCreateData}>
            <input
              type="text"
              name="sofa_name"
              placeholder="Enter Sofa Name"
              value={sofa_name}
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
              onChange={(e) => setPoster(e.target.files[0])}
              
            />
            <button type="submit" className="btn btn-light">
              submit
            </button>
          </form>
        </div>
      </>
    );
}

export default SofaAdmin;

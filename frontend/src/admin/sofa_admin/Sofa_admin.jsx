import React from 'react';
import Dashbord from '../Dashbord';

const SofaAdmin = () => {
    return (
      <>
      <Dashbord/>
        <div className="chair-form">
          <h1>Sofa Admin</h1>
          <form  className="input-form">
            <input
              type="text"
              name="chair_name"
              placeholder="Enter Chair Name"
            //   value={chair_name}
            //   onChange={(e) => setChairName(e.target.value)}
            />
            <input
              type="text"
              name="option"
              placeholder="Enter Del amount"
            //   value={option}
            //   onChange={(e) => setOption(e.target.value)}
            />
            <input
              type="text"
              name="price"
              placeholder="Enter Sell Price"
            //   value={price}
            //   onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              name="poster"
            //   onChange={(e) => setPoster(e.target.files[0])}
               // Use the handleChange to update the state with the file
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

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
import bed_hero from "./imges/bed-hero-img.png";
import dot_green from "./imges/dots-green.svg";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Bed = () => {
  const [beds, setBeds] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const navigate = useNavigate();


  // Get JWT token from localStorage
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://53w357tb-4000.inc1.devtunnels.ms/bed/get", {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token to the request
        },
      })
      .then((response) => {
        console.log(response.data); // Log the response for debugging
        setBeds(response.data.data); // Adjust according to your API response structure
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [token]);

 const addToCart = async (item) => {
   const Username = Cookies.get("User"); // Assuming this is the username cookie
   if (!Username) {
     alert("🙏Please login to add items to the cart.");
     navigate("/login"); // Redirect to login page
     return;
   }

   try {
     const quantity = 1; // Fixed quantity as 1
     const totalAmount = item.price * quantity; // Correct calculation
     // Logging for debugging
     console.log("Price:", item.price);
     console.log("Total Amount:", totalAmount);

     const response = await axios.post(
       "https://53w357tb-4000.inc1.devtunnels.ms/checkout/order", // Your backend URL
       {
         itemId: item._id,
         bed_name: item.bed_name,
         price: item.price,
         poster: item.poster,
         quantity: quantity, // Set quantity to 1
         username: Username,
         totalAmount: totalAmount, // Correctly calculated totalAmount
       }
     );

     if (response.data) {
       // Successful response
       console.log(response.data);
       alert("Item added successfully!");
       navigate("/checkout", {
         state: { cartItem: { ...item, quantity: 1 } },
       });
     } else {
       alert(
         `⚠️ Failed to add item to cart: ${
           response.data.message || "Unknown error"
         }`
       );
     }
   } catch (error) {
     console.error("Error adding item to cart:", error);

     // Checking if the error contains response information for better handling
     if (error.response) {
       alert(
         `⚠️ Failed to add item to cart: ${
           error.response.data.message || "Server error"
         }`
       );
     } else {
       alert("⚠️ Failed to add item to cart: Network or server error");
     }
   }
 };



  return (
    <>
      <Navbar />
      {/* Hero */}
      <div className="mainhero">
        <div className="hero container">
          <div className="herotext ">
            <div className="herotxtone">Modern Interior Design Bed</div>
            <div className="herotxttwo">
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            </div>
            <div className="herotxtthree">
              <button type="button" className="btn btn-light rounded-pill">
                Shop Now
              </button>
              <button
                type="button"
                className="btn btn-outline-light rounded-pill"
              >
                Explore
              </button>
            </div>
          </div>
          <div className="heroimg">
            <img
              src={dot_green}
              alt="Decorative green dots"
              className="dotgreen"
            />
            <img
              src={bed_hero}
              alt="Hero bed"
              title="hero bed"
              className="sofa bed-h-w"
            />
          </div>
        </div>
      </div>
      {/* Hero */}
      <h1 className="sofa-set">Beds</h1>

      {/* Card */}
      <div className="main-card">
        <div className="card-container container">
          {loading ? ( // Show loading indicator while data is being fetched
            <h2>Loading beds...</h2>
          ) : Array.isArray(beds) && beds.length > 0 ? ( // If not loading, check if beds exist
            beds.map((bed) => (
              <div
                className="card"
                key={bed._id}
                onClick={() => addToCart(bed)}
              >
                <img
                  src={`https://53w357tb-4000.inc1.devtunnels.ms/bed/img/${bed.poster}`}
                  alt={bed.bed_name}
                />
                <div className="card-item-name">
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
              </div>
            ))
          ) : (
            <h2>No beds available</h2> // If beds is empty or undefined
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bed;

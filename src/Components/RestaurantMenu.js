import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "./Constants";
import "./styles/restaurantmenu.css";
const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantDetails();
  }, []);
  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8812268&lng=77.6278377&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurantDetails(json.data);
  }
  if (!restaurantDetails) return <Shimmer />;

  return (
    <div className="restaurantContainer">
      <div className="restaurantImageContnaier">
        <img
          className="restaurantImage"
          src={
            IMG_CDN_URL +
            restaurantDetails.cards[0].card.card.info.cloudinaryImageId
          }
          alt="restauarantName"
        />
      </div>
      <div className="restaurantDetails">
        <h1>{restaurantDetails.cards[0].card.card.info.name}</h1>
        <h2>{restaurantDetails.cards[0].card.card.info.city}</h2>
        <h3>{restaurantDetails.cards[0].card.card.info.cuisines.join(", ")}</h3>
        <h3>
          Address :{restaurantDetails.cards[0].card.card.info.labels[1].message}
        </h3>
        <h3>Rating : {restaurantDetails.cards[0].card.card.info.avgRating}</h3>
      </div>
    </div>
  );
};
export default RestaurantMenu;

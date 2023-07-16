import "./styles/body.css";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(allrestaurants, searchText) {
  const filteredRestaurant = allrestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredRestaurant;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8812268&lng=77.6278377&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(allrestaurants, searchText);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurant?.map((restaurant) => {
          return (
            <Link
              className="restaurantCard"
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;

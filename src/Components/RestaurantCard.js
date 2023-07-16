import { IMG_CDN_URL } from "./Constants";

const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img
        className="restaurantImage"
        alt="restaurantImage "
        src={IMG_CDN_URL + props.restaurant.data?.cloudinaryImageId}
      />
      <h2>{props.restaurant.data?.name}</h2>
      <h4>{props.restaurant.data?.cuisines.slice(0, 2).join(", ")}</h4>
      {props.restaurant.data?.avgRating.toString == null ? (
        "yet to be rated"
      ) : (
        <span>{props.restaurant.data?.avgRating} stars</span>
      )}
    </div>
  );
};
export default RestaurantCard;

import "./styles/shimmer.css";

const Shimmer = () => {
  return (
    <>
      <div className="restaurantList">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};
export default Shimmer;

import { FaStar } from "react-icons/fa";

const RatingCard = ({ name, role, text, rating }) => {
    // Generate star icons based on the rating
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <FaStar
            key={i}
            className={i <= rating ? "text-yellow-400" : "text-gray-300"}
          />
        );
      }
      return stars;
    };
   
    // 
    return (
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-800 dark:text-gray-100">
        <div className="card-body p-4 ">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium">{role}</p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">{text}</p>
          <div className="mt-4 flex items-center space-x-1">
            {renderStars()}
            <span className="ml-2 text-gray-600 dark:text-gray-400 font-medium">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default RatingCard;
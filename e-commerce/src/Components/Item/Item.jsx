import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Item/Item.css';

const Item = ({ id, name, price, category, img, stock, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="item">
      <img src={img} alt={name} className="img-thumbnail square-image" />
      <h3 className="square-image text-truncate">{name}</h3>
      {showDetails && (
        <>
          <p className="square-image">Price: ${price}</p>
          <p className="square-image">Category: {category}</p>
          <p className="square-image">Stock: {stock}</p>
          <p className="square-image center text-truncate">{description}</p>
        </>
      )}
      <div>
        <button onClick={toggleDetails} className="btn btn-light square-image">
          {showDetails ? 'Hide Details' : 'See Details'}
        </button>
        {showDetails && (
          <Link to={`/item/${id}`} className="btn btn-light square-image">
            Go to Details Page
          </Link>
        )}
      </div>
    </div>
  );
};

export default Item;

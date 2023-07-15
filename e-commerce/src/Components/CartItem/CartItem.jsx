import { useState } from "react";
import { Col } from "react-bootstrap";

const CartItem = ({ id, name, price, quantity, img }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity);
    onAdd(quantity);
  };

  const subtotal = quantity * price;

  return (
    <tr>
      <td className="text-center">
        <img src={img} alt={name} className="img-thumbnail square-image" style={{width:'100px', height:'auto'}} />
      </td>
      <td className="text-center">
        <h3
          className="square-image text-truncate mt-5"
          style={{ fontSize: "medium" }}
        >
          {name}
        </h3>
      </td>
      <td className="text-center">
        <p className="square-image mt-5" style={{ fontSize: "medium" }}>
          Quantity: {quantity}
        </p>
      </td>
      <td className="text-center">
        <p className="square-image mt-5" style={{ fontSize: "medium" }}>
          Price: ${price}
        </p>
      </td>
      <td className="text-center">
        <p className="square-image mt-5" style={{ fontSize: "medium" }}>
          Subtotal: ${subtotal}
        </p>
      </td>
    </tr>
  );
};

export default CartItem;

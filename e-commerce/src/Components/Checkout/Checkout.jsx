import React, { useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import {
  collection,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { useCart } from "../../Context/CartContext";
import { db } from "../../Services/Firebase/firebaseConfig";
// import { useNotification } from "../../Notification/NotificationService";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart } = useCart();
//   const { showNotification } = useNotification();
const navigate = useNavigate();

  const createOrder = async () => {
    const objOrder = {
      buyer: {
        name: "Gerardo Pena",
        phone: 1234567890,
        email: "1234@1234",
      },
      items: cart,
      total,
    };

    try {
      const ids = cart.map((prod) => prod.id);
      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const querySnapshot = await getDocs(productsRef);
      const docs = querySnapshot.docs;

      const batch = writeBatch(db);
      const outOfStock = [];

      docs.forEach((doc) => {
        const fieldsDoc = doc.data();
        const stockDb = fieldsDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fieldsDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const { id } = await addDoc(orderRef, objOrder);

        // showNotification(
        //     "success",
        //     "The order was generated successfully. The ID is: " + id
        //   );

        console.log("Order created with ID:", id);
      }
    } catch (error) {
        // showNotification("error", "There is an error with the order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="text-center">
      <h1>Checkout</h1>
      <h2>Formulario</h2>
      <Button onClick={createOrder} disabled={loading}>
        {loading ? (
          <Spinner animation="border" role="status" size="sm">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          "Generate Order"
        )}
      </Button>
    </Container>
  );
};

export default Checkout;

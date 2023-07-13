import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore';
import { useCart } from '../../Context/CartContext';
import { db } from '../../Services/Firebase/firebaseConfig';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const { cart, total, clearCart } = useCart();
    const [buyerInfo, setBuyerInfo] = useState({
      name: '',
      phone: '',
      email: '',
    });
  
    const handleChange = (e) => {
      setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
    };
  
    const createOrder = async () => {
      if (!buyerInfo.name || !buyerInfo.phone || !buyerInfo.email) {
        Swal.fire('Missing Information', 'Please fill in all required fields', 'error');
        return;
      }
  
      if (cart.length === 0) {
        Swal.fire('Cart is Empty', 'Please add products to your cart before checking out', 'error');
        return;
      }
  
      const objOrder = {
        buyer: {
          name: buyerInfo.name,
          phone: buyerInfo.phone,
          email: buyerInfo.email,
        },
        items: cart,
        total,
      };

    try {
      const ids = cart.map((prod) => prod.id);

      if (ids.length === 0) {
        console.error('No products in the cart');
        return;
      }

      const productsRef = query(
        collection(db, 'products'),
        where(documentId(), 'in', ids)
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
        const orderRef = collection(db, 'orders');
        const { id } = await addDoc(orderRef, objOrder);

        Swal.fire({
            icon: 'success',
            title: 'Order Created',
            text: `Your order with ID ${id} has been successfully created`,
          });
  
          console.log('Order created with ID:', id);
  
          clearCart();
  
          navigate(`/order/${id}`);
        }
      } catch (error) {
      console.error('Error with the order:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="text-center">
      <h1>Checkout</h1>
      <h2>Formulary</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={buyerInfo.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          value={buyerInfo.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={buyerInfo.email}
          onChange={handleChange}
        />
      </div>
      <Button onClick={createOrder} disabled={loading}>
        {loading ? (
          <Spinner animation="border" role="status" size="sm">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          'Generate Order'
        )}
      </Button>
    </Container>
  );
};

export default Checkout;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../Services/Firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemContainerList({ greeting }) {
  const [products, setProducts] = useState([]);
  const [visitors, setVisitors] = useState(0);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = !categoryId
      ? collection(db, "products")
      : query(collection(db, "products"), where("category", "==", categoryId));

    getDocs(productsRef)
      .then((querySnapshot) => {
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });
        setProducts(productsAdapted);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  useEffect(() => {
    setVisitors((prevVisitors) => prevVisitors + 1);
  }, []);

  if (loading) {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Row className="justify-content-center">
          <Col xs="auto" className="text-center">
            <h1 className="mt-4">{greeting}</h1>
            <p>
              Visitors: <span className="visitor-count">{visitors}</span>
            </p>
            <h6 style={{ fontStyle: "italic", fontSize: "smaller" }}>
              "Cup of coffee, code, repeat"
            </h6>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto" className="mt-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Row className="justify-content-center mb-4">
        <Col xs="auto" className="text-center">
          <h1 className="mt-4">{greeting}</h1>
          <p>
            Visitors: <span className="visitor-count">{visitors}</span>
          </p>
          <h6 style={{ fontStyle: "italic", fontSize: "smaller" }}>
            "Cup of coffee, code, repeat"
          </h6>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ width: "100%" }}>
        <Col lg={12} className="mb-4">
          <ItemList products={products} />
        </Col>
      </Row>
    </Container>
  );
}

export default ItemContainerList;

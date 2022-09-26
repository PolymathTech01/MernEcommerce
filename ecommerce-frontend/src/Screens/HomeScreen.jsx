import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../Components/Product';
import { listProducts } from '../Actions/product.actions';
const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state);
  const { loading, error, products } = productList;
  console.log('state', productList);
  console.log('error', error);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className='text-uppercase'>Latest Products</h1>
      {/* {loading ? (
        <h2>Loading....</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )} */}
    </>
  );
};

export default HomeScreen;

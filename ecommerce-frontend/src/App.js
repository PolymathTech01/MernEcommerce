import Footer from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='product/:id' element={<ProductScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

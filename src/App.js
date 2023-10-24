import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import CustomNavbar from './Components/CustomNavbar';
import Signup from './Components/Signup';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Components/PrivateRoute';
import Store from './Components/Store';
import Product from './Components/Product';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';

function App() {
  return (
    <div >
      <BrowserRouter>
        <ToastContainer position='top-center' />
        <CustomNavbar />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/store/:categoryId' element={<Store />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route element={<PrivateRoute />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='cart' element={<Cart />} />
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

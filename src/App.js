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
import CartContextProvider from './Components/Context/Cart/CartContextProvider';
import Home from './Components/Home';
import AdminDashboard from './Components/AdminDashboard';
import AdminRoutes from './Components/AdminRoutes';
import AdminOrders from './Components/AdminOrders';
import ProductUpdate from './Components/ProductUpdate';
import ErrorPage from './Components/ErrorPage';
import CategoryUpdate from './Components/CategoryUpdate';

function App() {
  return (
    <div >
      <CartContextProvider>
        <BrowserRouter>
          <ToastContainer position='top-right' />
          <CustomNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/store/:categoryId' element={<Store />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route element={<PrivateRoute />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='cart' element={<Cart />} />
            </Route>
            <Route element={<AdminRoutes />}>
              <Route path='admin' element={<AdminDashboard />} />
              <Route path='admin-orders' element={<AdminOrders />} />
              <Route path='product-edit/:productId' element={<ProductUpdate />}></Route>
              <Route path='category-edit/:categoryId' element={<CategoryUpdate />}></Route>
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

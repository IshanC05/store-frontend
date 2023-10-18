import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import CustomNavbar from './Components/CustomNavbar';
import Signup from './Components/Signup';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import Store from './Components/Store';

function App() {
  return (
    <div >
      <BrowserRouter>
        <ToastContainer position='top-center' />
        <CustomNavbar />
        <Routes>
          <Route path='/store/:categoryId' element={<Store />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          {/* Private Routes */}
          <Route path='user' element={<PrivateRoute />}>
            <Route path='dashboard' element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

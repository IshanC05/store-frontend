import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import CustomNavbar from './Components/CustomNavbar';
import Signup from './Components/Signup';

function App() {
  return (
    <div >
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

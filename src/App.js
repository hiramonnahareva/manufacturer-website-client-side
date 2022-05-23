import { Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutMe from './Pages/AboutMe';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Purchase from './Pages/Purchase/Purchase';
import Purchage from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import RequirAuth from './RequirAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/dashboard' element={
     <RequirAuth>
       <Dashboard></Dashboard>
     </RequirAuth>
    }>
      <Route index element={<MyOrders></MyOrders>}></Route>
    </Route>
     <Route path='/service/:id' element={
     <RequirAuth>
       <Purchase></Purchase>
     </RequirAuth>
    }></Route>
     <Route path='/signup' element={<Signup></Signup>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/about' element={<AboutMe></AboutMe>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;

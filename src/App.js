import { Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutMe from './Pages/AboutMe';
import AddProducts from './Pages/Dashboard/AddProduct/AddProducts';
import AddReviews from './Pages/Dashboard/AddReviews/AddReviews';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Payment from './Pages/Dashboard/MyOrders/Payment';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';
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
      <Route path='order/:id' element={<Payment></Payment>}></Route>
      <Route path='profile' element={<MyProfile></MyProfile>}></Route>
      <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
      <Route path='addProduct' element={<AddProducts></AddProducts>}></Route>
      <Route path='manageOrders' element={<ManageOrders></ManageOrders>}></Route>
      <Route path='addReviews' element={<AddReviews></AddReviews>}></Route>
    </Route>
     <Route path='/service/:id' element={
     <RequirAuth>
       <Purchase></Purchase>
     </RequirAuth>
    }></Route>
     <Route path='/signup' element={<Signup></Signup>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/about' element={<AboutMe></AboutMe>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer></ToastContainer>


    </div>
  );
}

export default App;

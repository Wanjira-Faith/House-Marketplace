import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import Category from './pages/Category';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/'  element={<Explore/>} />
        <Route path='/offers' element={<Offers/>} />
        <Route path='/category/:categoryName' element={<Category/>} />
        <Route path='/profile' element={<PrivateRoute/>} >
           <Route path='/profile' element={<Profile/>} />
        </Route>
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
      </Routes>
      <Navbar/>
    </Router>

    <ToastContainer/>
    </>
  );
}

export default App;

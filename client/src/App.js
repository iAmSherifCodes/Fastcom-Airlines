import './App.css';
import ForgotPassword from './features/auth/ForgotPassword';
import Login from './features/auth/Login';
import ResetPassword from './features/auth/ResetPassword';
import SignUp from './features/auth/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateTicktet from './features/ticket/createTicktet';
import AdminSignUp from './features/auth/AdminSignUp';
import AirlineEquiry from './features/airlineEnquiry/AirlineEnquiry'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/admin/sign-up' element={<AdminSignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          <Route path='/create-ticket' element={<CreateTicktet />} />
          <Route path='/airline-enquiry' element ={<AirlineEquiry/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

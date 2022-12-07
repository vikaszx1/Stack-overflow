import { BrowserRouter as Router } from 'react-router-dom';
// import {  Routes, Route } from 'react-router-dom';

import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
// import { fetchAllUsers } from './api';
import { fetchAllUsers } from './actions/users';
import Chat from './components/Chat';
// import App2 from './App2';
// import EditProfile from './Community/Fpages/editProfile/EditProfile';
// import Register from './Community/Fpages/register/Register';
// import Login from './Community/Fpages/login/Login';
// import Profile from './Community/Fpages/profile/Profile';
// import Fhome from './Community/Fpages/Fhome/Fhome';
// import "./app.scss";

function App() {

 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(fetchAllQuestions())
  dispatch(fetchAllUsers())
 }, [dispatch])

  return (
    <div className="App">
      <Router >
        <Navbar />
        <AllRoutes />
        <Chat />
        {/* <Fhome />       */}
        {/* <Profile /> */}
        {/* <EditProfile /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <App2 /> */}
      </Router >
    </div>
  );
}

export default App;

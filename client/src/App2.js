// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";
import Chat from './components/Chat';
import EditProfile from './Community/Fpages/editProfile/EditProfile';
import Register from './Community/Fpages/register/Register';
import Login from './Community/Fpages/login/Login';
import Profile from './Community/Fpages/profile/Profile';
import Fhome from './Community/Fpages/Fhome/Fhome';
// import { Home } from '@mui/icons-material';
// import "./app.scss";
import "./Community/style/dark.scss"
import { useContext } from 'react';
import { DarkModeContext } from './Community/context/darkModeContext';
import { AuthContext } from './Community/context/AuthContext'



function App2() {
    const { darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    const AuthRoute = ({children}) => {
      if(!currentUser){
        return <Navigate to="/Login" />
      }
      return children;
    }

    const router = createBrowserRouter([
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/Fhome",
        element: (<AuthRoute><Fhome /></AuthRoute>),
      },
      {
        path: "/profile/:username",
        element: (<AuthRoute><Profile /></AuthRoute>),
      },
      {
        path: "/profile/:username/edit",
        element:  (<AuthRoute><EditProfile /></AuthRoute>),
      },
    ])
  return (
    <div className={darkMode ? "App2 dark" : "App2"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App2;

// <BrowserRouter>
//   <Routes>
//     <Route path='/'>
//         <Route path='login' element={<Login />} />
//         <Route path='register' element={<Register />} />
//         <Route index element={<Fhome />} />
//         <Route path='profile'>
//             <Route path=':userId' element={<Profile />} />
//             <Route path=':userId/edit' element={<EditProfile />} />
//         </Route>
//     </Route>
//   </Routes>
// </BrowserRouter>

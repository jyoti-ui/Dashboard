// import './App.css';
// import Dashboard from './pages/dashboard/dashboard';
// import Login from './pages/login/login';

// const App = () => {
//   return (
//     <div>
//       <Login/>
//       <Dashboard/>
//     </div>
//   );
// }

import React from 'react';
import "./App.css"
import Header from './components/header/header';
import Home from './pages/home/home';
import {Routes, Route } from "react-router-dom";
import Navigation from './components/navigation/navigation';
import AddEmployee from './pages/add-employee/add-employee';

const App = () => {
  return (
    <div>
    <Header/>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/list' element={<></>}/>
      <Route path='/add' element={<AddEmployee/>}/>
      </Routes>
    </div>
  )
}

export default App

  
  

          

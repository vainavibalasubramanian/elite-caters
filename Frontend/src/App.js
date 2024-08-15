import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import SignUp from './Signup/signup';
import Login from './Login/login';
import Home from './Home/Homepage'
import Toolbar from './Toolbar/toolbar';
import Customorder from './CustomOrder/Customorder';
import PackageList from './Packages/PackageList/PackageList';
import Package1 from './Packages/Packages/Package1';
import OrderList from './Order/OrderList';
import AboutUs from './AboutUS/Aboutus';
import Admin from './Admin/Admin';
import withAuth from './Session/Session';
import FinalOrder from './Order/FinalOrder';
import AdminHome from './Admin/AdminHome';
import Admintoolbar from './Admin/Admintoolbar';
import AdminCustom from './Admin/AdminCustom';
const ProtectedHome = withAuth(Home);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Toolbar/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Customorder" element={<Customorder/>}></Route>
          <Route path="/PackageList" element={<PackageList/>}></Route>
          <Route path="/Package1" element={<Package1/>}></Route>
          <Route path="/OrderList" element={<OrderList/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Admin" element={<Admin/>}></Route>
          <Route path="/Signup" element={<SignUp/>}></Route>
          <Route path="/FinalOrder" element={<FinalOrder/>}></Route>
          </Route>
          <Route path="/" element={<Admintoolbar/>}>
          <Route path='/AdminHome' element={<AdminHome/>}></Route>
          <Route path='/AdminCustom' element={<AdminCustom/>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
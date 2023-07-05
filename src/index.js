import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MyMenu from './MyMenu';
// import AdminHome from './AdminHome';
import Category from './category';
import Product from './Product';
import Orders from './orders';
import OrdersDetail from './order-detail';
import Users from './users';
import Adminhome from './AdminHome';
import EditProduct from './editproduct';
import InsertCategory from './insertcategory';
import InsertProduct from './insertproduct';

const root = ReactDOM.createRoot(document.getElementById('root'));


function MyRouter()
{
  return (<BrowserRouter>
  <Routes>
    <Route path='' element={<MyMenu />}>
      {/* <Route path='/adminhome' element={<AdminHome />} />   */}
      <Route path='/category' element={<Category />} />
      <Route path='/insertcategory' element={<InsertCategory />} />  
      <Route path='/product' element={<Product />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/order-detail' element={<OrdersDetail />} />
      <Route path='/users' element={<Users />} />  
      <Route path='/Adminhome' element={<Adminhome />} /> 
      <Route path='/editproduct' element={<EditProduct />} />
      <Route path='/insertproduct' element={<InsertProduct />} /> 
      {/* <Route path='/edit-category' element={<EditCategory />} />      
      <Route path='/print-order' element={<PrintOrder />} />  
      <Route path='/admin-login' element={<AdminLogin />} />  
      <Route path='/adminchangepassword' element={<AdminChangePassword />} />  
      <Route path='/adminforgotpassword' element={<AdminForgotPassword />} />  
      <Route path='/adminlogout' element={<AdminLogout />} />   
       
        */}
       
    </Route >
  </Routes>
  </BrowserRouter>)
}
root.render(<MyRouter/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


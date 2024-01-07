import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../component/Home/Home'
import SingleCardPage from '../component/Productsdetails/SingleCardPage'
import Womens from '../component/Womens/Womens';
import Mens from '../component/Mens/Mens';
import Kids from '../component/Kids/Kids';
import Signup from '../component/login_signup/Signup';
import Login from '../component/login_signup/Login';
import Dashboard from '../component/Admin/AdminPages/Dashboard';
import Store from '../component/Admin/AdminPages/Store';
import AddProducts from '../component/Admin/AdminPages/AddProducts';
import Wishlist from '../component/Wishlist/Wishlist';
import Homeandkitchen from '../component/Womens/Homeandkitchen';
import PaymentsPage from '../component/PaymentModel/PaymentsPage';
import Cart from '../component/Cart/Cart';
import PrivateRoute from './PrivateRoute';

import Address from '../component/PaymentModel/Address';
import Checkout from '../component/PaymentModel/Checkout';
import Thankyou from '../component/PaymentModel/Thankyou';



const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/women" element={<Womens />} />
            <Route path="/men" element={<Mens />} />
            <Route path="/kid" element={<Kids />} />
            <Route path="/:category/:_id" element={<SingleCardPage />}></Route>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path="/dashboard" element={
                <PrivateRoute>  <Dashboard /> </PrivateRoute>
            }></Route>

            <Route path='/store' element={<Store />}></Route>
            <Route path='/addProducts' element={<AddProducts />}></Route>
            <Route path='/addProduct' element={<AddProducts />}></Route>
            <Route path="/cart" element={
                <PrivateRoute>  <Cart />  </PrivateRoute>
            }></Route>
            <Route path="/wishlist" element={
                <PrivateRoute>  <Wishlist />  </PrivateRoute>
            }></Route>
            <Route path="/payment" element={<PaymentsPage />} />
            <Route path="/address" element={<Address />} />
            <Route path="/homeandkitchen" element={<Homeandkitchen />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
    )
}

export default AllRoutes
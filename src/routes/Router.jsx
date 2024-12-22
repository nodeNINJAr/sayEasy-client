import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Tutors from '../pages/Tutors';
import AddTutorial from '../pages/private/AddTutorial';
import MyTutorials from '../pages/private/MyTutorials';
import BookedTutors from '../pages/private/BookedTutors';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import PrivateRoute from '../pages/private/PrivateRoute';
import UpdateTutorials from '../pages/private/UpdateTutorials';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
               <Route index={true} element={<Home/>}/>
               <Route path='/find-tutors' element={<Tutors/>}/>
               <Route path='/add-tutorial' element={<PrivateRoute><AddTutorial/></PrivateRoute>}/>
               <Route path='/tutorials' element={<PrivateRoute><MyTutorials/></PrivateRoute>}/>
               <Route path='/booked-tutors' element={<PrivateRoute><BookedTutors/></PrivateRoute>}/>
               <Route path='/tutorial-details' element={<PrivateRoute><BookedTutors/></PrivateRoute>}/>
               <Route path='/update-tutorial/:id' element={<PrivateRoute><UpdateTutorials/></PrivateRoute>}/>
                {/* auth */}
                <Route path='/login' element={<Login/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
            </Route>
        </Routes>
    );
};

export default Router;
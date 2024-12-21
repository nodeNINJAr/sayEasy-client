import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Tutors from '../pages/Tutors';
import AddTutorial from '../pages/private/AddTutorial';
import MyTutorials from '../pages/private/MyTutorials';
import BookedTutors from '../pages/private/BookedTutors';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
               <Route index={true} element={<Home/>}/>
               <Route path='/find-tutors' element={<Tutors/>}/>
               <Route path='/add-tutorial' element={<AddTutorial/>}/>
               <Route path='/tutorials' element={<MyTutorials/>}/>
               <Route path='/booked-tutors' element={<BookedTutors/>}/>
               
            </Route>
        </Routes>
    );
};

export default Router;
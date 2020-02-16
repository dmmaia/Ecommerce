import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Main from './routes/Main';
import Smartphones from './routes/Smartphones';

export default function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Smartphones' element={<Smartphones />} />
            <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
    )
}
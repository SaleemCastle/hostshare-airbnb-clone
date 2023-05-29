import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './pages/Main/index'

const Room = lazy(() => import('./pages/Room/index'))

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <Main /> }/>
            <Route path='room/:id' element={ <Room /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

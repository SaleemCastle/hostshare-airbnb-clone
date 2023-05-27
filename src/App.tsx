import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './pages/Main/index'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <Main /> }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

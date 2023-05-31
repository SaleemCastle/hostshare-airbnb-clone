import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './pages/Main/index'
import RoomSkeleton from './pages/Room/RoomSkeleton';
import SearchResultsSkeleton from './pages/SearchResults/SearchResultsSkeleton';

const Room = lazy(() => import('./pages/Room/index'))
const SearchResults = lazy(() => import('./pages/SearchResults/index'))

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <Main /> }/>
            <Route path='room/:id' element={
                <Suspense fallback={ <RoomSkeleton /> }>
                    <Room />
                </Suspense> 
                } 
            />
            <Route path='s/:searchParam' element={ 
                <Suspense fallback={ <SearchResultsSkeleton /> }>
                    <SearchResults />
                </Suspense>
             } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

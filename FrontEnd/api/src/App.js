import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './pages/Edit/edit';
import Feed from './pages/Feed/feed';
import Post from './pages/Post/post';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Feed />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='/edit/:id' element={<Edit />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

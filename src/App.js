import React from 'react';
import { HashRouter } from 'react-router-dom';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from "react-router-dom";
import Login from './Pages/Login';
import Main from './Pages/Main';
import Post from './Pages/Post'
import Layout from './Components/Layout';


const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/post" element={<Post />} />
      </Route>
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </HashRouter>    
);

export default App;

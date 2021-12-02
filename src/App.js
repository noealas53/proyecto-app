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
    <HashRouter>
      <HashRouter element={<Layout />}>
        <HashRouter exact path="/" element={<Main />} />
        <HashRouter exact path="/post" element={<Post />} />
      </HashRouter>
      <Route exact path="/login" element={<Login />} />
    </HashRouter>
  </HashRouter>    
);

export default App;

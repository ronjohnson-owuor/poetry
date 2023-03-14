import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import './index.css';

    function App(){
      return (
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      )
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);


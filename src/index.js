import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';

import Navbar from './Navbar';
import Homepage from './landing_page/home/Homepage.js';
import AboutPage from './landing_page/about/AboutPage';
import Footer from './Footer.js';
import TournamentPage from './landing_page/tournaments/TournamentPage.js';
import NewsPage from './landing_page/News/NewsPage.js';
import RegisterPage from './landing_page/Register/RegisterPage.js';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <Navbar/>
    <Routes>

       <Route path='/'element={<Homepage/>}/>
       <Route path='/about'element={<AboutPage/>}/>
       <Route path='/tournaments'element={<TournamentPage/>}/>
       <Route path='/news'element={<NewsPage/>}/>
       <Route path='/register'element={<RegisterPage/>}/>
        
      

      




    </Routes>
   
    
    
    
    <Footer/>
    </BrowserRouter>
    
     
    

  </React.StrictMode>
);


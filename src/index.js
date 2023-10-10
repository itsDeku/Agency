import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Navbar from './component/navbar'
import Hero from './component/hero/hero'
import reportWebVitals from './reportWebVitals';
import OurService from './component/ourService/ourService';
import OurWork from './component/ourWork/ourWork';
import ClientTalk from './component/clientTalk/clientTalk';
import WeDo from './component/weDo/weDo';
import Footer from './component/footer/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>
<Navbar/>
<Hero/>
<OurService/>
<OurWork />
<ClientTalk/>
<WeDo/>
<Footer/>
</BrowserRouter>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

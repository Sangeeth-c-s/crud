import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './list/list';
import Header from './components/header';
import Footer from './components/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <div className='App'>
    <Header />
    <div className='app-body'><List/>
</div>
    <Footer/>

  </div>
);



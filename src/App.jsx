import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  

  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
      <Outlet />
      </main>
      
      <Footer />
      </div>
    </>
  )
}

export default App;

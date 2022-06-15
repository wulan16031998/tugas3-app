import React from 'react'
import ErrorBoundary from '../components/ErrorBoundary';

import Products from '../components/Products';


const Home = () => {
  return (
    
    <div className='text-4xl text-center'>
    
        <header >
       
             <h1 >Selamat datang di aneka herbal Indonesia </h1>
        </header>  
        <section className='products'>
            <ErrorBoundary>
            <Products/ >
            </ErrorBoundary>
        </section>
        <footer></footer>
    </div>
  )
}

export default Home
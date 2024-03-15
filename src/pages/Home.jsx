import React from 'react';
import Shop from './Shop';

const Home = () => {
  return (
    <>
      <main className='mb-6'>
        <section className="row bg-gray-100 px-16 py-16">
          <div className="container grid grid-cols-1 justify-between lg:grid-cols-2 gap-8 items-center">
            <div className="hero-content text-center lg:text-left">
              <p className="mb-6 lg:mb-12">We are the World Best E-Commerce Company</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to SansMart</h1>
              <p className="mb-8 lg:mb-12">
                Discover endless possibilities at our eCommerce haven, where quality meets convenience. 
                Shop with confidence for all your needs, from fashion to electronics. Experience seamless
                transactions and exceptional customer service. Welcome to the future of online shopping.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                <a href="/contact">
                  <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 lg:mb-0 lg:mr-4">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img src="/images/home.png" alt="coding together" className="w-full lg:w-3/4 h-auto" />
            </div>
          </div>
        </section>
        <Shop />
      </main>
    </>
  );
};

export default Home;


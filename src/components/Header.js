import React from 'react';

const Header = () => {
  return (
    <div className='text-center my-28 md:my-20 '>
      <h2 className='text-2xl md:text-2xl text-gray-500'>Lucas Padularrosa</h2>
      <h2 className='text-4xl md:text-6xl font-bold "'>
        Desarrollador{' '}
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
          Trainee/Jr.
        </span>
      </h2>
    </div>
  );
};

export default Header;

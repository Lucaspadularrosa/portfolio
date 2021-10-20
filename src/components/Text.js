import React from 'react';

const Text = (prop) => {
  return (
    <div className='text-center uppercase p-2 m-1 md:mb-12 text-gray-600'>
      <p>{prop.name}</p>
    </div>
  );
};

export default Text;

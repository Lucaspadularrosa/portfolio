import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='flex justify-between h-10 items-center w-4/5 container mx-auto mt-3'>
      <div>
        <p>Nucba ❤</p>
      </div>
      <div className='flex space-x-2'>
        <a href='https://www.linkedin.com/in/lucas-padularrosa/'>
          <SiLinkedin className='hover:text-blue-500' />
        </a>
        <a href='https://github.com/Lucaspadularrosa'>
          <SiGithub className='hover:text-gray-500' />
        </a>
        <a href='https://wa.me/543413065110'>
          <SiWhatsapp className='hover:text-green-500' />
        </a>
      </div>
    </div>
  );
};

export default Footer;

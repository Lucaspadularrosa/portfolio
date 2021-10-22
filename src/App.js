import React, { useRef } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './img/foto-logo.jpg';
import { AiOutlineAlignLeft } from 'react-icons/ai';

function App() {
  const logoImg = useRef();
  const onButtonClick = () => {
    const menu = logoImg.current;
    menu.classList.toggle('invisible');
  };

  return (
    <div className='w-full bg-black text-white'>
      <BrowserRouter>
        <div className='sticky top-0 bg-black bg-opacity-100  p-2  border-opacity-25 flex justify-between items-center md:justify-around'>
          <div className='flex justify-between py-2 px-6 w-full items-center md:flex md:items-center  md:w-4/5 md:justify-around'>
            <div className='items-center pr-2 md:pr-0 md:hidden'>
              <button onClick={onButtonClick}>
                <AiOutlineAlignLeft className='text-3xl' />
              </button>
            </div>
            <div className='p-2 text-right'>
              <div className='relative w-12 h-12'>
                <a href='./'>
                  <img
                    className='rounded-full shadow-sm cursor-pointer'
                    src={logo}
                    alt='logo'
                  />
                </a>
              </div>
            </div>
            <div
              className='flex flex-col p-2 shadow-2xl mt-40 md:mt-0 font-semiboldbold absolute bg-black border-2 border-white border-opacity-25 rounded invisible md:visible md:static md:flex-row md:border-0 md:space-x-5'
              ref={logoImg}
            >
              <Link
                to='/'
                className='font-extrabold bg-clip-text text-white hover:text-green-200'
              >
                Inicio
              </Link>
              <Link
                to='/skills'
                className='font-extrabold bg-clip-text text-white hover:text-green-200'
              >
                Habilidades
              </Link>
              <Link
                to='/projects'
                className='font-extrabold bg-clip-text text-white hover:text-green-200'
              >
                Proyectos
              </Link>
              <a
                href='cv/lucaspadularrosa.pdf'
                target='_blank'
                className='font-extrabold  bg-clip-text text-white hover:text-green-200'
              >
                Curriculum
              </a>
            </div>
          </div>
        </div>

        <Header />

        <Switch>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

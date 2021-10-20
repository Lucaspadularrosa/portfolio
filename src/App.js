import React, { useRef } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './img/foto-logo.jpg';
import { TiCode } from 'react-icons/ti';

function App() {
  const logoImg = useRef();
  const onButtonClick = () => {
    const menu = logoImg.current;
    menu.classList.toggle('invisible');
  };
  return (
    <div className='w-full bg-black text-white'>
      <BrowserRouter>
        <div className='sticky top-0 bg-black bg-opacity-100  p-2 border-b-2 border-white border-opacity-25 flex justify-between items-center md:justify-around'>
          <div>
            <div className='p-2 text-right'>
              <div className='relative w-12 h-12'>
                <img
                  className='rounded-full shadow-sm cursor-pointer'
                  src={logo}
                  onClick={onButtonClick}
                  alt='logo'
                />
              </div>
            </div>
            <div
              className='flex flex-col p-2 shadow-2xl  font-semiboldbold absolute bg-black border-2 border-white border-opacity-25 rounded invisible'
              ref={logoImg}
            >
              <Link
                to='/'
                className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-200 to-blue-800 hover:from-green-500 hover:to-yellow-100'
              >
                Inicio
              </Link>
              <Link
                to='/skills'
                className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-200 to-blue-800 hover:from-green-500 hover:to-yellow-100'
              >
                Habilidades
              </Link>
              <Link
                to='/projects'
                className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-200 to-blue-800 hover:from-green-500 hover:to-yellow-100'
              >
                Proyectos
              </Link>
              <a
                href='cv/lucaspadularrosa.pdf'
                target='_blank'
                className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-200 to-blue-800 hover:from-green-500 hover:to-yellow-100'
              >
                Curriculum
              </a>
            </div>
          </div>
          <div className='flex justify-center items-center pr-2 md:pr-0'>
            <TiCode className='' /> <span className='font-bold'>Lp</span>
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

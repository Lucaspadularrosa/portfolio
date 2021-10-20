import React from 'react';
import Text from './Text';

const Home = () => {
  return (
    <>
      <Text name='Sobre mi' />
      <div className='w-4/5 container mx-auto md:w-2/4 font-bold'>
        Hola, soy Lucas Padularrosa. Tengo 23 años, actualmente vivo en Rosario,
        Sante Fe. <br /> A principios del año 2020 comencé a estudiar Análisis
        de Sistemas en el Instituto Politécnico de Rosario. <br /> Me apasiona
        el desarrollo de Software, mi primer lenguaje de programación fue “C”,
        con el cual aprendí las bases de la programación estructurada, lo que
        fue una ayuda para aprender otros paradigmas de programación, como el
        funcional y el orientado a objetos. <br /> Este año empecé un bootcamp
        de programación fullstack en Nucba. El desarrollo web hoy en día es mi
        prioridad, un gran porcentaje de mis proyectos están hechos en
        JavaScript. <br /> Mi objetivo es dominar las tecnologías del frontend,
        aprender la lógica del backend y poder administrar bases de datos. Para
        poder desarrollarme como programador fullstack. <br /> <br /> Gracias
        por visitar mi portfolio.
      </div>
      <div className='flex justify-center items-center my-16'>
        <button className='border-2 p-2 border-blue-600 rounded hover:border-white'>
          <a
            href='https://www.linkedin.com/in/lucas-padularrosa/'
            className='hover:text-blue-400'
          >
            Hablemos ☕
          </a>
        </button>
      </div>
    </>
  );
};

export default Home;

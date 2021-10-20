import React, { useState } from 'react';
import Text from './Text';
import { Card } from './Card';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: 'Aplicación de Tareas',
      url: 'https://images.unsplash.com/photo-1515847049296-a281d6401047?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRhc2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description:
        'Aplicación de tareas, que enfatiza la simplicidad y facilidad de uso. Podrás visualizar tus tareas pendientes y las que ya fueron realizadas. ',
      href: 'https://github.com/Lucaspadularrosa/react-task',
    },
    {
      title: 'Aplicación de Criptomonedas',
      url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      description:
        'Podrás ver las criptomonedas más consumidas del mercado, sus estadísticas, etc. Creada con React, useState, useEffect. Utilice la libreia Axios para hacer peticiones ',
      href: 'https://github.com/Lucaspadularrosa/react-crypto',
    },
    {
      title: 'CRUD',
      url: 'https://techvccloud.mediacdn.vn/2018/11/30/crud-15435683934502144104962-crop-1543568398584927543865.png',
      description:
        'CRUD (Create-Read-Update-Delete) en React. Utilice Api Context, React-Router y los siguientes hooks: useState, useEffect y useReducer.',
      href: 'https://github.com/Lucaspadularrosa',
    },
  ]);
  return (
    <>
      <Text name='Proyectos' />
      <div className='w-full md:w-4/5 container mx-auto mt-7'>
        {projects.map((project) => (
          <Card
            key={Math.random()}
            title={project.title}
            url={project.url}
            description={project.description}
            href={project.href}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;

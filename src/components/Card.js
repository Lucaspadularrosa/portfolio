import { SiGithub } from 'react-icons/si';

export function Card(props) {
  return (
    <section className='w-full'>
      <div className='md:w-10/12 md:flex md:mx-auto md:mt-12'>
        <div
          className='w-full h-56 bg-cover bg-center md:w-1/2 md:rounded'
          style={{ backgroundImage: `url(${props.url})` }}
        ></div>
        <div className='p-4 md:w-1/2 md:flex md:flex-col md:justify-between md:p-0 md:pl-3 '>
          <h2 className='font-semibold'>{props.title}</h2>
          <p>{props.description}</p>
          <a
            href={props.href}
            className='px-4 py-2 font-medium text-white capitalize   bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80 mt-4 md:w-32 flex justify-center'
          >
            <SiGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

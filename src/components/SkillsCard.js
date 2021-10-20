export function SkillsCard(props) {
  console.log(props);
  return (
    <div className='border-2 border-white flex  flex-col justify-center items-center p-3'>
      {props.children}
      <h2 className='text-2xl'>{props.name}</h2>
      <p className='uppercase text-gray-600'>{props.since}</p>
    </div>
  );
}

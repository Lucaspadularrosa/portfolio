import Text from './Text';
import { SiTailwindcss, SiCplusplus } from 'react-icons/si';
import {
  DiJsBadge,
  DiReact,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiNodejsSmall,
  DiGit,
  DiMongodb,
  DiSqllite,
  DiMysql,
} from 'react-icons/di';

import { SkillsCard } from './SkillsCard';

const Skills = () => {
  return (
    <>
      <Text name='Habilidades' />
      <div className='w-4/5 container mx-auto md:w-2/4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4'>
          <SkillsCard name='Html' since='Desde 2020'>
            <DiHtml5 className='text-6xl hover:text-red-400' />
          </SkillsCard>

          <SkillsCard name='Css' since='Desde 2020'>
            <DiCss3 className='text-6xl hover:text-blue-400' />
          </SkillsCard>

          <SkillsCard name='JavaScript' since='Desde 2021'>
            <DiJsBadge className='text-6xl hover:text-yellow-300' />
          </SkillsCard>

          <SkillsCard name='React Js' since='Desde 2021'>
            <DiReact className='text-6xl hover:text-blue-300' />
          </SkillsCard>

          <SkillsCard name='Node Js' since='Desde 2021'>
            <DiNodejsSmall className='text-6xl hover:text-green-600' />
          </SkillsCard>

          <SkillsCard name='Git' since='Desde 2020'>
            <DiGit className='text-6xl hover:text-red-400' />
          </SkillsCard>

          <SkillsCard name='Bootstrap' since='Desde 2020'>
            <DiBootstrap className='text-6xl hover:text-indigo-700' />
          </SkillsCard>

          <SkillsCard name='Tailwind' since='Desde 2021'>
            <SiTailwindcss className='text-6xl hover:text-green-400' />
          </SkillsCard>

          <SkillsCard name='MongoDB' since='Desde 2021'>
            <DiMongodb className='text-6xl hover:text-green-500' />
          </SkillsCard>

          <SkillsCard name='Sqlite' since='Desde 2021'>
            <DiSqllite className='text-6xl hover:text-blue-400' />
          </SkillsCard>

          <SkillsCard name='MySql' since='Desde 2021'>
            <DiMysql className='text-6xl hover:text-blue-400' />
          </SkillsCard>

          <SkillsCard name='C++' since='Desde 2020'>
            <SiCplusplus className='text-6xl hover:text-blue-700' />
          </SkillsCard>
        </div>
      </div>
    </>
  );
};

export default Skills;

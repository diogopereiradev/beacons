import React from 'react';
import { Campfire } from './components/Campfire';
import { Tree } from './components/Tree';

export function Scenario(): JSX.Element {
  return (
    <div className='flex flex-col w-full h-[600px] absolute bottom-0 overflow-hidden'>
      <div className='absolute left-0 bottom-[110px] flex'>
        <Tree color='bg-primary-300' cstyles='top-[30px] left-[-60px]' />
        <Tree color='bg-primary-100' cstyles='top-[50px] left-[-140px]' />
        <Tree color='bg-primary-200' cstyles='top-[70px] left-[-200px]' />
      </div>
      <div className='absolute left-[50%] bottom-[100px] translate-x-[-50%]'>
        <Campfire />
      </div>
      <div className='absolute right-0 bottom-[110px] flex'>
        <Tree color='bg-primary-200' cstyles='top-[70px] left-[200px] z-[3]' />
        <Tree color='bg-primary-100' cstyles='top-[50px] left-[140px] z-[2]' />
        <Tree color='bg-primary-300' cstyles='top-[30px] left-[60px] z-[1]' />
      </div>
      <img className='absolute bottom-[110px] z-[-10]' src='/icons/ground-wave.svg'/>
      <div className='absolute bottom-0 w-full h-[110px] bg-primary-200 z-[-1]'></div>
    </div>
  );
}
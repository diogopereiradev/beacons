import React from 'react';
import { Campfire } from './components/Campfire';

export function Scenario(): JSX.Element {
  return (
    <div className='w-full absolute bottom-0'>
      <div className='flex justify-center'>
        <Campfire />
      </div>
      <div className='w-full h-[110px] bg-primary-200'></div>
    </div>
  );
}
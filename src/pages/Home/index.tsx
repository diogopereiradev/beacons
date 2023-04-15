import React from 'react';
import { Campfire } from './components/Campfire';
import { Links } from './components/Links';

export function Home(): JSX.Element {
  return (
    <div className='w-full h-screen min-h-[768px]'>
      <Links />
      <div className='w-full absolute bottom-[120px] left-[-100px] flex justify-center items-center'>
        <Campfire />
      </div>
    </div>
  );
}
import React from 'react';
import { Scenario } from './components/Scenario';

export function Home(): JSX.Element {
  return (
    <div className='relative w-full h-screen min-h-[512px]'>
      <Scenario />
    </div>
  );
}
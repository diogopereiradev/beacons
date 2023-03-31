import React from 'react';

import { AppTitle } from './components/AppTitle';
import { Links } from './components/Links';
import { RightControls } from './components/RightControls';

export function Navbar(): JSX.Element {
  return(
    <div className='flex items-center justify-between p-[70px] msm:p-[30px]'>
      <AppTitle />
      <Links />
      <RightControls />
    </div>
  );
}
import React from 'react';

export function AppTitle(): JSX.Element {
  return(
    <div className='flex items-center gap-[15px]'>
      <img className='w-[55px] msm:w-[45px]' src='/icons/icon.svg' alt='website-logo' />
      <h2 className='text-primary-100 text-[1.6rem] msm:text-[1.45rem] font-default font-[700]'>GitmeLab</h2>
    </div>
  );
}
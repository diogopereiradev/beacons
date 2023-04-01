import React from 'react';

import { useTranslation } from '../../../../shared/hooks/useTranslation';
import { Navbar } from '../../../../shared/components/layout/Navbar';
import { Link } from '../../../../shared/components/utilities/Link';

function Title(): JSX.Element {
  return (
    <>
      <h2 className='relative text-primary-100 text-[230px] 3xl:text-[200px] 2xl:text-[160px] xl:text-[130px] lg:text-[110px] md:text-[85px] msm:text-[56px] font-default font-[700]'>
        <span className='
          before:absolute
          before:lg:hidden
          before:left-[-0.5%]
          before:top-[25%]
          before:w-[35px]
          before:h-[35px]
          before:bg-[#f0f0f0]
          before:rounded-full
          after:absolute
          after:lg:hidden
          after:left-[-2.5%]
          after:top-[25%]
          after:w-[20px]
          after:h-[21px]
          after:bg-[#f0f0f0]
          after:rounded-full
          after:animate-bounce
        '></span>
        <img
          className='absolute top-[10%] left-[-6%] w-[11.1%] rotate-[-50deg]'
          src='/icons/icon.svg'
          alt='header-title-logo'
        />
        <span>GitmeLab</span>
      </h2>
    </>
  );
}

function Description(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center gap-[20px] mt-[-40px] md:mt-0'>
      <p
        className='
          text-center 
          max-w-[850px]
          2xl:max-w-[670px]
          xl:max-w-[500px]
          md:max-w-[400px]
          text-primary-300 
          text-[19px]
          2xl:text-[17px]
          xl:text-[15.5px]
          msm:text-[14px]
          font-default 
          font-[500]
        '
      >
        {t('homepage.header.description')}
      </p>
      <Link
        to='/editor'
        component='route'
        variant='filled'
        cstyles='w-52 h-14 2xl:w-48 2xl:h-12 text-[17px]'
      >
        {t('navbar.getstarted.link')}
      </Link>
    </div>
  );
}

export function Header(): JSX.Element {
  return (
    <header>
      <Navbar />
      <div className='flex justify-center px-[50px] py-[100px]'>
        <div className='flex flex-col items-center'>
          <Title />
          <Description />
        </div>
      </div>
    </header>
  );
}
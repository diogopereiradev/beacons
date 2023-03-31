import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import { FaGithub, FaHome } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';

import { useTranslation } from '../../../../hooks/useTranslation';
import { Link } from '../../../utilities/Link';
import { Button } from '../../../utilities/Button';

function MenuNavigationLinks(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-[3px]'>
      <Link
        to='/'
        component='route'
        variant='text'
        cstyles='flex gap-[10px] px-[20px] py-[13px] rounded-full hover:bg-third-100 hover:text-secondary-500 active:bg-third-300'
      >
        <FaHome size={22} />
        {t('navbar.home.link')}
      </Link>
      <Link
        to='/about'
        component='route'
        variant='text'
        cstyles='flex gap-[10px] px-[20px] py-[13px] rounded-full hover:bg-third-100 hover:text-secondary-500 active:bg-third-300'
      >
        <HiInformationCircle size={23} />
        {t('navbar.about.link')}
      </Link>
      <Link
        to='https://github.com/FhillSlinger/fhilllab.git'
        target='_blank'
        rel='noreferrer'
        component='url'
        variant='text'
        cstyles='flex gap-[10px] px-[20px] py-[13px] rounded-full hover:bg-third-100 hover:text-secondary-500 active:bg-third-300'
      >
        <FaGithub size={20} />
        {t('navbar.github.link')}
      </Link>
    </div>
  );
}

function SideMenu({ menuState }: { menuState: [boolean, React.Dispatch<React.SetStateAction<boolean>>] }) {
  const [isOpen, setIsOpen] = menuState;
  const { t } = useTranslation();

  return (
    <div className={`fixed left-0 top-0 z-[500] ${!isOpen && 'pointer-events-none'}`}>
      <div onClick={() => setIsOpen(false)} className={`fixed w-screen h-screen transition bg-[#00000099] z-[-1] ${isOpen ? 'opacity-1' : 'opacity-0'}`}></div>
      <div className={`w-[300px] sm:w-screen h-screen bg-secondary-700 z-[1000] p-[50px] transition ${!isOpen && 'translate-x-[-100%]'}`}>
        <button onClick={() => setIsOpen(false)} className='absolute top-[30px] right-[30px]'>
          <MdClose
            className='text-primary-100'
            size={22}
          />
        </button>
        <div className='flex items-center gap-[20px]'>
          <img className='w-[40px]' src='/icons/icon.svg' alt='website-logo' />
          <h2 className='text-primary-100 text-[22px] font-default font-[500]'>GitmeLab</h2>
        </div>
        <hr className='w-full h-[1px] bg-separator border-0 my-[30px]' />
        <div className='flex flex-col gap-[30px]'>
          <Link
            to='/editor'
            component='route'
            variant='filled'
            cstyles='w-full'
          >
            {t('navbar.getstarted.link')}
          </Link>
          <MenuNavigationLinks />
        </div>
      </div>
    </div>
  );
}

export function MobileMenu(): JSX.Element {
  const menuState = useState(false);

  return (
    <>
      <Button variant='text' onClick={() => menuState[1](true)}>
        <BiMenu size={33} />
      </Button>
      <SideMenu menuState={menuState} />
    </>
  );
}
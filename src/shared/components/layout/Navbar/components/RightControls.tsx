import React from 'react';

import { useTranslation } from '../../../../hooks/useTranslation';
import { Link } from '../../../utilities/Link';

import { MobileMenu } from './MobileMenu';
import { LocaleSwitcher } from './LocaleSwitcher';

export function RightControls(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className='flex items-center gap-[15px]'>
      <Link to='/editor' component='route' variant='filled' cstyles='xl:hidden'>{t('navbar.getstarted.link')}</Link>
      <LocaleSwitcher />
      <div className='hidden xl:flex'>
        <MobileMenu />
      </div>
    </div>
  );
}
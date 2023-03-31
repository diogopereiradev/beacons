import React from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from '../../../utilities/Link';
import { useTranslation } from '../../../../hooks/useTranslation';

export function Links(): JSX.Element {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const linkUnderline = `
    before:absolute
    before:left-0
    before:top-[27px]
    before:p-[2.5px]
    before:rounded-full
    before:bg-primary-500
    after:absolute
    after:left-[10px]
    after:top-[27px]
    after:py-[2.5px]
    after:px-[11px]
    after:rounded-full
    after:bg-primary-500
  `;

  const links = [
    {
      path: '/',
      label: t('navbar.home.link')
    },
    {
      path: '/about',
      label: t('navbar.about.link')
    }
  ];

  return(
    <div className='flex gap-[32px] xl:hidden'>
      {links.map(link => {
        return(
          <Link 
            key={link.path}
            to={link.path}
            component='route'
            variant='text'
            cstyles={`relative ${link.path === pathname? `text-secondary-500 ${linkUnderline}` : ''}`}
          >
            {link.label}
          </Link>
        );
      })}
      <Link 
        to='https://github.com/FhillSlinger/gitmelab' 
        target='_blank'
        rel='noreferrer'
        component='url'
        variant='text'
      >
        {t('navbar.github.link')}
      </Link>
    </div>
  );
}
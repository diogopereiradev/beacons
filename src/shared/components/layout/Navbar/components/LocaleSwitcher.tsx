import React, { useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import locales from '../../../../locales';

import { useTranslation } from '../../../../hooks/useTranslation';
import { Button } from '../../../utilities/Button';

function LocalesSelectDialog({ dialogState }: { dialogState: [boolean, React.Dispatch<React.SetStateAction<boolean>>] }): JSX.Element {
  const [isOpen, setIsOpen] = dialogState;
  const { setLocale, locale: currentLocale } = useTranslation();

  const handleClick = (locale: keyof typeof locales) => {
    setLocale(locale);
    setIsOpen(false);
  };

  return (
    <div className={`absolute left-[-150px] top-[50px] duration-200 ${isOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'}`}>
      {Object.values(locales).map(locale => {
        return (
          <Button
            key={locale.shortName}
            variant='text'
            onClick={() => handleClick(locale.shortName as keyof typeof locales)}
            cstyles={`bg-secondary-500 w-48 px-[10px] py-[15px] first:rounded-t-lg last:rounded-b-lg ${currentLocale.shortName === locale.shortName && 'text-secondary-500'}`}
          >
            {locale.fullName}
          </Button>
        );
      })}
    </div>
  );
}

export function LocaleSwitcher(): JSX.Element {
  const dialogState = useState(false);

  return (
    <>
      <div className={`fixed left-0 top-0 w-screen h-screen ${dialogState[0] ? 'block' : 'hidden'}`} onClick={() => dialogState[1](false)}></div>
      <div className='relative z-[1]'>
        <Button variant='text' onClick={() => dialogState[1](state => !state)}>
          <BiWorld size={26} />
        </Button>
        <LocalesSelectDialog dialogState={dialogState} />
      </div>
    </>
  );
}
import React from 'react';
import { FiFilePlus } from 'react-icons/fi';
import { MdDelete, MdEdit } from 'react-icons/md';

import { Button } from '../../../../../../../shared/components/utilities/Button';

export function MenuToolsBar(): JSX.Element {
  return (
    <div className='flex justify-between gap-[5px] px-[15px]'>
      <div className='flex'>
        <Button variant='text' cstyles='w-[35px] h-[35px] duration-200 rounded-lg hover:bg-third-100'>
          <FiFilePlus className='text-primary-300' size={20} />
        </Button>
      </div>
      <div className='flex'>
        <Button variant='text' cstyles='w-[35px] h-[35px] duration-200 rounded-lg hover:bg-third-100'>
          <MdDelete className='text-primary-300' size={23} />
        </Button>
        <Button variant='text' cstyles='w-[35px] h-[35px] duration-200 rounded-lg hover:bg-third-100'>
          <MdEdit className='text-primary-300' size={21} />
        </Button>
      </div>
    </div>
  );
}
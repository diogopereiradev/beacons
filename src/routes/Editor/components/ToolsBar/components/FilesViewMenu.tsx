import React from 'react';
import { useDispatch } from 'react-redux';
import { FiFilePlus } from 'react-icons/fi';
import { FaFolderPlus } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

import { useTypedSelector } from '../../../../../shared/hooks/useTypedSelector';
import { useTranslation } from '../../../../../shared/hooks/useTranslation';
import { explorerCloseMenu } from '../../../../../shared/store/features/editor/explorer-slice';
import { Button } from '../../../../../shared/components/utilities/Button';

function MenuToolsBar(): JSX.Element {
  return (
    <div className='flex justify-between gap-[5px] px-[15px]'>
      <div className='flex'>
        <Button variant='text' cstyles='w-[35px] h-[35px] duration-200 rounded-lg hover:bg-third-100'>
          <FiFilePlus className='text-primary-300' size={20} />
        </Button>
        <Button variant='text' cstyles='w-[35px] h-[35px] duration-200 rounded-lg hover:bg-third-100'>
          <FaFolderPlus className='text-primary-300' size={20} />
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

export function FilesViewMenu(): JSX.Element {
  const { t } = useTranslation();
  const explorer = useTypedSelector(state => state.editorExplorer);
  const dispatch = useDispatch();

  return (
    <div
      className={`
        fixed
        left-[55px]
        top-0
        w-[320px]
        h-screen
        bg-secondary-500
        duration-150
        z-[-1]
        p-[40px]
        ${explorer.currentMenu === 'filesView' ? 'translate-x-[0px]' : 'translate-x-[-100%]'}
      `}
    >
      <button onClick={() => dispatch(explorerCloseMenu())} className='absolute right-[40px] top-[20px]'>
        <IoMdClose
          className='text-primary-100'
          size={24}
        />
      </button>
      <h3 className='text-primary-100 text-[1.1rem] font-default font-[500]'>{t('editorpage.toolbar.explorer.title')}</h3>
      <hr className='w-full h-[1px] bg-separator border-0 my-[10px]' />
      <MenuToolsBar />
      <hr className='w-full h-[1px] bg-separator border-0 my-[10px]' />
    </div>
  );
}
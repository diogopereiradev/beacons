import React from 'react';
import { useDispatch } from 'react-redux';
import { IoMdClose } from 'react-icons/io';

import { useTypedSelector } from '../../../../../../shared/hooks/useTypedSelector';
import { useTranslation } from '../../../../../../shared/hooks/useTranslation';
import { explorerCloseMenu } from '../../../../../../shared/store/features/editor/explorer-slice';
import { MenuToolsBar } from './components/Toolsbar';
import { FilesView } from './components/FilesView';

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
        msm:w-[calc(100%_-_55px)]
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
      <div className='py-[20px]'>
        <FilesView files={explorer.menus.filesView.files}/>
      </div>
    </div>
  );
}
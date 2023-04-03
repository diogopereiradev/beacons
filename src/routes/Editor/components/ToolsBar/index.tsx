import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AiFillFolder } from 'react-icons/ai';

import { explorerCloseMenu, explorerOpenMenu } from '../../../../shared/store/features/editor/explorer-slice';
import { useTypedSelector } from '../../../../shared/hooks/useTypedSelector';
import { Link } from '../../../../shared/components/utilities/Link';
import { Button } from '../../../../shared/components/utilities/Button';
import { FilesViewMenu } from './components/FilesViewMenu';

function FilesViewButton(): JSX.Element {
  const explorer = useTypedSelector(state => state.editorExplorer);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    if (explorer.currentMenu === 'filesView') {
      dispatch(explorerCloseMenu());
    } else {
      dispatch(explorerOpenMenu('filesView'));
    }
  }, [explorer.currentMenu]);

  return (
    <Button 
      onClick={handleClick} 
      variant='text' 
      cstyles={`
        py-3 
        ${explorer.currentMenu === 'filesView'? 'bg-primary-300 hover:bg-primary-500' : 'hover:bg-third-100'}
      `}
    >
      <AiFillFolder className='text-primary-100' size={26} />
    </Button>
  );
}

export function ToolsBar(): JSX.Element {
  return (
    <>
      <aside className='fixed top-0 left-0 w-[55px] h-full bg-secondary-300'>
        <div className='flex flex-col gap-[10px] py-4'>
          <Link
            to='/'
            component='route'
            variant='text'
            cstyles='flex justify-center items-center'
          >
            <img className='w-[29px]' src='/icons/icon.svg' alt='website-logo' />
          </Link>
          <hr className='w-[80%] h-[1px] bg-separator border-0 mx-auto mt-[10px]' />
          <FilesViewButton />
        </div>
      </aside>
      <FilesViewMenu />
    </>
  );
}
import React from 'react';

import { useTypedSelector } from '../../../shared/hooks/useTypedSelector';

export function StatusBar(): JSX.Element {
  const statusbar = useTypedSelector(state => state.editorStatusBar);

  return (
    <aside className='fixed bottom-0 w-screen h-[25px] bg-secondary-300'>
      <div className='flex justify-between items-center px-3 h-full'>
        <div className='flex items-center gap-[15px] h-full'>
          <h2 className='text-primary-100 text-[13px] font-default font-[500]'>Editor</h2>
          <p className='text-primary-100 text-[13px] font-default font-[400]'>{statusbar.editor.characters} characters</p>
          <p className='text-primary-100 text-[13px] font-default font-[400]'>{statusbar.editor.lines} lines</p>
          <p className='text-primary-100 text-[13px] font-default font-[400]'>Ln {statusbar.editor.line}, Col {statusbar.editor.column}</p>
        </div>
        <div className='flex items-center gap-[15px] h-full msm:hidden'>
          <h2 className='text-primary-100 text-[13px] font-default font-[500]'>Preview</h2>
          <p className='text-primary-100 text-[13px] font-default font-[400]'>{statusbar.preview.characters} characters</p>
        </div>
      </div>
    </aside>
  );
}
import React from 'react';
import { useDispatch } from 'react-redux';
import { FaMarkdown } from 'react-icons/fa';

import { useTypedSelector } from '../../../../../../../shared/hooks/useTypedSelector';
import { setFilesViewSelectedFile } from '../../../../../../../shared/store/features/editor/explorer-slice';

type File = {
  id: string,
  name: string,
  content: string
};

function FileItem({ file }: { file: File }) {
  const selectedFile = useTypedSelector(state => state.editorExplorer.menus.filesView.selectedFile);
  const dispatch =  useDispatch();

  return (
    <li key={file.id}>
      <button
        onClick={() => dispatch(setFilesViewSelectedFile(file))}
        className={`
          flex
          items-center
          gap-[14px]
          w-full
          duration-150 
          text-primary-300
          text-[15px]
          font-default
          font-[500]
          ${selectedFile.id === file.id && 'bg-third-100'}
          hover:bg-third-100
          hover:text-secondary-300
          active:text-secondary-500
          px-[10px]
          py-[5px]
          rounded-md
        `}
      >
        <FaMarkdown
          className='text-[#fad669]'
          size={18}
        />
        {file.name}.md
      </button>
    </li>
  );
}

export function FilesView({ files }: { files: File[] }): JSX.Element {
  return (
    <ul className='flex flex-col gap-[4px]'>
      {files.map(file => <FileItem key={file.id} file={file} />)}
    </ul>
  );
}
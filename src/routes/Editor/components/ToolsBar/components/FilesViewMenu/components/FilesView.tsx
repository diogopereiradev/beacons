import React from 'react';
import { FaMarkdown } from 'react-icons/fa';

type File = {
  id: string,
  label: string
};

function FileItem({ file }: { file: File }) {
  return (
    <li key={file.id}>
      <button
        className='
          flex
          items-center
          gap-[14px]
          w-full
          duration-150 
          text-primary-300
          text-[15px]
          font-default
          font-[500]
          hover:bg-third-100
          hover:text-secondary-300
          active:text-secondary-500
          px-[10px]
          py-[5px]
          rounded-md
        '
      >
        <FaMarkdown
          className='text-[#fad669]'
          size={18}
        />
        {file.label}.md
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
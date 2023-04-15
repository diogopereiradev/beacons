import React from 'react';
import { FaGithub, FaCodepen, FaLinkedin, FaDiscord } from 'react-icons/fa';

export function Links(): JSX.Element {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center py-[50px]'>
        <img className='w-[180px] rounded-full border-[5px] border-[#ffe194] p-[5px]' src='/icons/profile.jpg' alt='diogo-profile-icon' />
        <div className='flex flex-col items-center mt-[20px]'>
          <h2 className='text-[#ffe194] text-[1.9rem] font-default font-[500]'>Diogo Pereira</h2>
          <p className='text-primary-500 text-[1.3rem] font-default font-[500]'>Desenvolvedor Front-end</p>
        </div>
      </div>
      <div className='flex gap-[20px]'>
        <a href='https://github.com/FhillSlinger' className='flex justify-center items-center w-[50px] h-[50px] bg-primary-300 rounded-lg'>
          <FaGithub
            className='text-primary-100'
            size={30}
          />
        </a>
        <a href='https://codepen.io/fhillslinger/pens/public' className='flex justify-center items-center w-[50px] h-[50px] bg-primary-300 rounded-lg'>
          <FaCodepen
            className='text-primary-100'
            size={30}
          />
        </a>
        <a href='https://www.linkedin.com/in/fhill-slinger/' className='flex justify-center items-center w-[50px] h-[50px] bg-primary-300 rounded-lg'>
          <FaLinkedin
            className='text-primary-100'
            size={30}
          />
        </a>
        <a href='https://discord.com/users/882178309205671956' className='flex justify-center items-center w-[50px] h-[50px] bg-primary-300 rounded-lg'>
          <FaDiscord
            className='text-primary-100'
            size={30}
          />
        </a>
      </div>
    </div>
  );
}
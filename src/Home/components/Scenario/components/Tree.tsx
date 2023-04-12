import React from 'react';

export function Tree({ color, cstyles }: { color: string, cstyles: string }): JSX.Element {
  return (
    <div className={`relative max-w-[260px] flex items-center flex-col ${cstyles}`}>
      {/** Leaves  */}
      <div
        className={`w-[120px] h-[70px] rounded-t-[50px] mb-[-10%] ${color}`}
      ></div>
      <div
        className={`w-[190px] h-[70px] rounded-t-[50px] mb-[-5%] ${color}`}
      ></div>
      <div
        className={`w-[230px] h-[70px] rounded-[50px] mb-[-5%] ${color}`}
      ></div>
      <div
        className={`w-[250px] h-[70px] rounded-[50px] mb-[-5%] ${color}`}
      ></div>
      {/** Log */}
      <div
        className={`w-[60px] h-[130px] rounded-b-[7px] mb-[-5%] z-[9999] ${color}`}
      ></div>
      {/** Shadow */}
      <div
        className='
          absolute
          left-[50%]
          translate-x-[-50%]
          top-[98%]
          w-[150px]
          h-[35px]
          rounded-[50%]
          bg-[#10101033]
        '
      ></div>
    </div>
  );
}
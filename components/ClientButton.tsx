'use client';

import { useState, type ReactNode } from 'react';

export const ClientButton = ({children, seconds}: {children: ReactNode, seconds: number}) => {
  const [count, setCount] = useState(0);

return (
  <button onClick={() => setCount(count + 1)} className='text-orange-400 border-2 border-orange-400 hover:bg-orange-100'>
    <div className='text-xs text-black font-mono text-left'>use client;</div>
    <div className="m-2 p-2">
      <div>Client Side state: {count}</div>
      <div>Seconds from server side: {seconds}</div>
      {children}
    </div>
  </button>
  )
};
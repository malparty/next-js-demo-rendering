'use client';

import { useState, type ReactNode } from 'react';

export const ClientButton = ({children}: {children: ReactNode}) => {
  const [count, setCount] = useState(0);

return (
  <button onClick={() => setCount(count + 1)} className='text-orange-400 border-2 border-orange-400 hover:bg-orange-100'>
    <div className='text-xs text-black font-mono text-left'>use client;</div>
    <div className="m-2 p-2">
      Client Side {count}
      {' '}{children}
    </div>
  </button>
  )
};
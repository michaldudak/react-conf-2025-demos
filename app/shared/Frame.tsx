import * as React from 'react';

export function Frame(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className={`flex items-center justify-center w-[910px] h-[490px] ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
}

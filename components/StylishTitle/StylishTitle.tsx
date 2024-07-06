import * as React from 'react';

type TitleProps = {
  size?: 'lg' | 'sm';
  children: string;
};

const StylishTitle: React.FC<TitleProps> = ({ children, size = 'lg' }) => {
  const style = {
    textShadow:
      '1px 1px 0px #FFB650,  2px 2px 1px #FFD662,  3px 3px 2px  #FF80BF, 4px 4px 3px #EF5097,5px 5px 4px #6868AC,6px 6px 5px #90B1E0',
  };

  if (size === 'sm') {
    return (
      <h1 style={style} className='px-4 pt-2 pb-4 text-xl font-bold text-white'>
        {children}
      </h1>
    );
  } else {
    return (
      <h1
        style={style}
        className='px-4 pt-2 pb-4 text-5xl font-bold text-white'
      >
        {children}
      </h1>
    );
  }
};

export default StylishTitle;

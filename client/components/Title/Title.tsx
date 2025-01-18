import * as React from 'react';

type TitleProps = {
  size?: 'lg' | 'sm';
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children, size = 'lg' }) => {
  if (size === 'sm') {
    return (
      <h1
        style={{ textShadow: '0px 3px 3px rgba(0,0,0,1)' }}
        className='px-4 pt-2 pb-4 text-xl font-bold text-white'
      >
        {children}
      </h1>
    );
  } else {
    return (
      <h1
        style={{ textShadow: '0px 3px 3px rgba(0,0,0,1)' }}
        className='px-4 pt-2 pb-4 text-4xl font-bold text-white'
      >
        {children}
      </h1>
    );
  }
};

export default Title;

import * as React from 'react';

type TitleProps = {
  children: string;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className='px-4 pt-2 pb-4 text-3xl font-bold text-white'>{children}</h1>
  );
};

export default Title;

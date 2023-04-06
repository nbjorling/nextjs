import * as React from 'react';

type TitleProps = {
  children: string;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className='font-bold text-3xl pt-2 pb-4 text-white px-4'>{children}</h1>
  );
};

export default Title;

import * as React from 'react';

type FlippableCardProps = {
  frontText: string;
  backText?: string;
  frontTextSize?: string;
  backTextSize?: string;
  textColor?: string;
  bgColor?: string;
  height?: string;
  width?: string;
};

const FlippableCard: React.FC<FlippableCardProps> = ({
  frontText,
  backText,
  frontTextSize = 'text-8xl',
  backTextSize = 'text-2xl',
  textColor = 'text-white',
  bgColor = 'bg-[rgba(254,80,0,1)]',
  height = 'h-48',
  width = 'w-60',
}) => {
  const [showBack, setShowBack] = React.useState(false);

  const flipCard = () => {
    backText && setShowBack(!showBack);
  };

  return (
    <div
      className={`m-1 flex ${height} ${width} cursor-pointer select-none bg-transparent [perspective:1000px]`}
      onClick={flipCard}
    >
      <div
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
          showBack && '[transform:rotateY(180deg)]'
        }`}
      >
        <div className='absolute inset-0 [backface-visibility:hidden]'>
          <div
            className={`flex h-full w-full flex-col items-center justify-center ${bgColor}`}
          >
            <p className={`text-center ${frontTextSize} ${textColor}`}>
              {frontText}
            </p>
          </div>
        </div>
        <div className='absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <div
            className={`flex h-full w-full flex-col items-center justify-center p-1 ${bgColor}`}
          >
            <p className={`text-center ${backTextSize} ${textColor}`}>
              {backText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;

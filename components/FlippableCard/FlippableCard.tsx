import * as React from 'react';

type FlippableCardProps = {
  frontText: string;
  backText?: string;
  textColor?: string;
  bgColor?: string;
};

const FlippableCard: React.FC<FlippableCardProps> = ({
  frontText,
  backText,
  textColor = 'text-yellow-300',
  bgColor = 'bg-blue-500',
}) => {
  const [showBack, setShowBack] = React.useState(false);

  const flipCard = () => {
    backText && setShowBack(!showBack);
  };

  return (
    <div
      className='m-1 flex h-32 w-48 cursor-pointer select-none bg-transparent [perspective:1000px]'
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
            <p className={`text-center text-4xl ${textColor}`}>{frontText}</p>
          </div>
        </div>
        <div className='absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <div
            className={`flex h-full w-full flex-col items-center justify-center ${bgColor}`}
          >
            <p className={`text-center text-xl ${textColor}`}>{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;

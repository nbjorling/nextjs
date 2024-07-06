import * as React from 'react';

type FlippableCardProps = {
  frontText: string;
  backText?: string;
  frontTextSize?: string;
  backTextSize?: string;
  textColor?: string;
  bgColor?: string;
  bgBackColor?: string;
  height?: string;
  width?: string;
};

const FlippableCard: React.FC<FlippableCardProps> = ({
  frontText,
  backText,
  frontTextSize = 'text-2xl md:text-5xl lg:text-8xl text-yellow-300 drop-shadow-[0_3.2px_2.2px_rgba(0,0,0,0.8)]',
  // backTextSize = 'text-md md:text-xl lg:text-xl xl:text-2xl drop-shadow-[0_3.2px_2.2px_rgba(0,0,0,0.8)]',
  textColor = 'text-white',
  bgColor = 'bg-gradient-to-b from-[#2193b0] to-[#6dd5ed]',
  // bgBackColor = 'bg-gradient-to-b to-[#2193b0] from-[#6dd5ed]',
  height = 'h-[160px]',
  width = 'w-full',
}) => {
  const [showBack, setShowBack] = React.useState(false);

  const flipCard = () => {
    backText && setShowBack(!showBack);
  };

  return (
    <div
      className={`flex ${height} ${width} grow cursor-pointer  select-none bg-transparent [perspective:1000px]`}
      onClick={flipCard}
    >
      <div
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
          showBack && '[transform:rotateY(180deg)]'
        }`}
      >
        {/* FRONTSIDE */}
        <div className='absolute  h-full w-full [backface-visibility:hidden]'>
          <div
            className={`flex h-full w-full flex-col items-center justify-center ${bgColor} rounded-2xl`}
          >
            <p className={`text-center ${frontTextSize} ${textColor}`}>
              {frontText}
            </p>
          </div>
        </div>

        {/* BACKSIDE */}
        <div className='absolute  h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]'>
          <div
            className={`flex h-full w-full flex-col items-center justify-center ${'bg-orange'} rounded-2xl`}
          >
            {/* <p className={`p-1 text-center ${backTextSize} ${textColor}`}>
              {backText}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;

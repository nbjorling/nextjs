import * as React from 'react';

type JeopardyCardProps = { caption: string; question?: string };

const JeopardyCard: React.FC<JeopardyCardProps> = ({ caption, question }) => {
  const [showQuestion, setShowQuestion] = React.useState(false);

  const flipCard = () => {
    question && setShowQuestion(!showQuestion);
  };

  return (
    <div
      className='m-1 flex h-32 w-48 cursor-pointer select-none bg-transparent [perspective:1000px]'
      onClick={flipCard}
    >
      <div
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
          showQuestion && '[transform:rotateY(180deg)]'
        }`}
      >
        <div className='absolute inset-0 [backface-visibility:hidden]'>
          <div className='flex h-full w-full flex-col items-center justify-center bg-blue-500'>
            <p className='text-center text-4xl text-yellow-300'>{caption}</p>
          </div>
        </div>
        <div className='absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <div className='flex h-full w-full flex-col items-center justify-center bg-blue-500'>
            <p className='text-center text-xl text-yellow-300'>{question}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeopardyCard;

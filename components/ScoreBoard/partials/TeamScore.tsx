import * as React from 'react';

type TeamScoreProps = {
  name: string;
};

const TeamScore: React.FC<TeamScoreProps> = ({ name }) => {
  const [score, setScore] = React.useState(
    parseInt(localStorage.getItem(name)) || 0
  );

  const add100 = () => {
    setScore(score + 100);
  };

  const subtract100 = () => {
    setScore(score - 100);
  };

  React.useEffect(() => {
    localStorage.setItem(name, `${score}`);
  }, [score]);

  return (
    <div className='m-1 flex w-full flex-col items-center justify-center bg-[rgba(164,43,1,1)] p-6 text-white'>
      <p className='text-5xl'>
        {name}: {score}p
      </p>
      <div className='m-2 flex flex-row'>
        <button onClick={add100} type='button'>
          <p className='m-1 w-24 rounded border border-black bg-white p-1 text-black active:bg-slate-600'>
            + 100p
          </p>
        </button>
        <button onClick={subtract100} type='button'>
          <p className='m-1 w-24 rounded border border-black bg-white p-1 text-black active:bg-slate-600'>
            - 100p
          </p>
        </button>
      </div>
    </div>
  );
};

export default TeamScore;

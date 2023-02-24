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
    <div className='m-1 flex w-full flex-col items-center justify-center bg-blue-500 p-6 text-yellow-300'>
      <p className='text-3xl'>
        {name}: {score}p
      </p>
      <div className='flex flex-row'>
        <button onClick={add100} type='button'>
          <p className='m-1 w-24 rounded bg-blue-300 text-yellow-300 active:bg-blue-600'>
            + 100p
          </p>
        </button>
        <button onClick={subtract100} type='button'>
          <p className='m-1 w-24 rounded bg-blue-300 text-yellow-300 active:bg-blue-600'>
            - 100p
          </p>
        </button>
      </div>
    </div>
  );
};

export default TeamScore;

import * as React from 'react';
import TeamScore from './partials/TeamScore';

const ScoreBoard: React.FC = () => {
  const [teams, setTeams] = React.useState<string[]>([]);
  const [newTeam, setNewTeam] = React.useState<string>('');

  const addTeam = () => {
    if (newTeam.length > 0) {
      setTeams([...teams, newTeam]);
      setNewTeam('');
    }
  };

  return (
    <div className='h-full w-full min-w-fit flex-col bg-black'>
      {teams.map((team) => (
        <TeamScore key={team} name={team} />
      ))}
      <div className='m-1 flex w-full flex-row items-center justify-between bg-blue-500 p-2'>
        <input
          className='w-full'
          value={newTeam}
          onChange={(e) => setNewTeam(e.target.value)}
          placeholder='Team name'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTeam();
            }
          }}
        />
        <button type='button' onClick={addTeam}>
          <p className='m-2 w-24 rounded bg-blue-300 text-yellow-300 active:bg-blue-600'>
            Add team
          </p>
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;

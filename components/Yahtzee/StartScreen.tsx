import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { useState } from 'react';
import { Modes } from '../../pages/yahtzeeGame';

type Screens = 'NumberOfPlayersView' | 'NumberOfRollsView' | 'ModeView';
const screenOrder: Screens[] = [
  'NumberOfPlayersView',
  'NumberOfRollsView',
  'ModeView',
];

const modeTranslations = {
  topDown: {
    title: 'Top Down',
    description: 'You start on the top of the scorecard and work your way down',
  },
  topFirst: {
    title: 'Top First',
    description:
      'You choose freely on the top half, and when the top half is full, you move to the bottom half',
  },
  freeForAll: {
    title: 'Free For All',
    description: 'You can choose freely where to put your score',
  },
};

const NumberOfPlayersView = ({ state, setState, nextView }) => {
  const incrementPlayers = () => {
    setState((prev) => {
      return { ...prev, players: prev.players + 1 };
    });
  };

  const decrementPlayers = () => {
    setState((prev) => {
      return { ...prev, players: prev.players - 1 };
    });
  };

  return (
    <>
      <p className='text-lg'>How many players?</p>
      <div className='flex justify-center gap-2 '>
        <button
          type='button'
          className='w-16 rounded-md bg-purple-600 p-4'
          onClick={decrementPlayers}
        >
          <ArrowLeft size={32} color='white' />
        </button>
        <p className='w-16 rounded-md bg-white p-4 text-2xl'>{state.players}</p>
        <button
          type='button'
          className='w-16 rounded-md bg-purple-600 p-4'
          onClick={incrementPlayers}
        >
          <ArrowRight size={32} color='white' />
        </button>
      </div>
      <button
        type='button'
        className='rounded-md bg-purple-800 p-4 text-lg text-white'
        onClick={nextView}
      >
        Next
      </button>
    </>
  );
};

const NumberOfRollsView = ({ state, setState, nextView }) => {
  const incrementRolls = () => {
    setState((prev) => {
      return { ...prev, rolls: prev.rolls + 1 };
    });
  };

  const decrementRolls = () => {
    setState((prev) => {
      return { ...prev, rolls: prev.rolls - 1 };
    });
  };

  return (
    <>
      <p className='text-lg'>How many rolls?</p>
      <div className='flex justify-center gap-2 '>
        <button
          type='button'
          className='w-16 rounded-md bg-purple-600 p-4'
          onClick={decrementRolls}
        >
          <ArrowLeft size={32} color='white' />
        </button>
        <p className='w-16 rounded-md bg-white p-4 text-2xl'>{state.rolls}</p>
        <button
          type='button'
          className='w-16 rounded-md bg-purple-600 p-4'
          onClick={incrementRolls}
        >
          <ArrowRight size={32} color='white' />
        </button>
      </div>
      <button
        type='button'
        className='rounded-md bg-purple-800 p-4 text-lg text-white'
        onClick={nextView}
      >
        Next
      </button>
    </>
  );
};

const ModeView = ({ state, setState, nextView, nextScreen }) => {
  function setMode(mode: Modes) {
    setState((prev) => {
      return { ...prev, mode };
    });
  }

  const buttonClasses = 'w-full rounded-md bg-purple-600 p-4';
  const activeButtonClasses = 'w-full rounded-md bg-purple-800 p-4';

  return (
    <>
      <p className='text-lg'>What mode?</p>
      <div className='flex flex-col gap-2  text-white'>
        <button
          type='button'
          className={
            state.mode === 'topDown' ? activeButtonClasses : buttonClasses
          }
          onClick={() => setMode('topDown')}
        >
          <p className='font-bold'>{modeTranslations.topDown.title}</p>
          <p>{modeTranslations.topDown.description}</p>
        </button>
        <button
          type='button'
          className={
            state.mode === 'topFirst' ? activeButtonClasses : buttonClasses
          }
          onClick={() => setMode('topFirst')}
        >
          <p className='font-bold'>{modeTranslations.topFirst.title}</p>
          <p>{modeTranslations.topFirst.description}</p>
        </button>
        <button
          type='button'
          className={
            state.mode === 'freeForAll' ? activeButtonClasses : buttonClasses
          }
          onClick={() => setMode('freeForAll')}
        >
          <p className='font-bold'>{modeTranslations.freeForAll.title}</p>
          <p>{modeTranslations.freeForAll.description}</p>
        </button>
      </div>
      <button
        type='button'
        className='rounded-md bg-purple-800 p-4 text-lg text-white'
        onClick={nextScreen}
      >
        Next
      </button>
    </>
  );
};

const StartScreen = ({ state, setState, nextScreen }) => {
  const [view, setView] = useState<Screens>('NumberOfPlayersView');

  console.log('Koca: view ', view);

  function nextView() {
    const currentIndex = screenOrder.indexOf(view);
    if (currentIndex === screenOrder.length - 1) {
      return;
    }
    setView(screenOrder[currentIndex + 1]);
  }

  return (
    <div className='absolute bottom-0 flex h-full w-full flex-col justify-end'>
      <div className='flex flex-col gap-6 rounded-t-md bg-amber-400 p-8 text-center shadow-lg'>
        <h1 className='pt-4 text-3xl font-bold'>Yahtzee</h1>
        {view === 'NumberOfPlayersView' && (
          <NumberOfPlayersView
            state={state}
            setState={setState}
            nextView={nextView}
          />
        )}
        {view === 'NumberOfRollsView' && (
          <NumberOfRollsView
            state={state}
            setState={setState}
            nextView={nextView}
          />
        )}
        {view === 'ModeView' && (
          <ModeView
            state={state}
            setState={setState}
            nextView={nextView}
            nextScreen={nextScreen}
          />
        )}
      </div>
    </div>
  );
};

export default StartScreen;

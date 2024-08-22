import { useState } from 'react';
import YahtzeeGame from '../components/Yahtzee/YahtzeeGame';

type Screens = 'StartScreen' | 'GameView';

const screenOrder: Screens[] = ['StartScreen', 'GameView'];

export type Modes = 'topDown' | 'topFirst' | 'freeForAll';

type State = {
  players: number;
  rolls: number;
  mode: Modes;
};

export default function StartPage() {
  const [showDiceRoller, setShowDiceRoller] = useState<boolean>(true);
  const [state, setState] = useState<State>({
    players: 1,
    rolls: 3,
    mode: 'topDown',
  });
  const [view, setView] = useState<Screens>('StartScreen');

  function nextScreen() {
    const currentIndex = screenOrder.indexOf(view);
    if (currentIndex === screenOrder.length - 1) {
      return;
    }
    setView(screenOrder[currentIndex + 1]);
  }

  return (
    <main className='flex h-full w-full flex-col justify-end bg-slate-700'>
      {/* <div className='flex'>
        <Link href='/'>
          <div className='ml-4 mr-4 w-fit cursor-pointer rounded bg-slate-700 py-2 px-4 text-white'>
            Back
          </div>
        </Link>
        <button
          type='button'
          className='ml-4 mr-4 w-fit cursor-pointer rounded bg-slate-700 py-2 px-4 text-white'
          onClick={() => setShowDiceRoller(!showDiceRoller)}
        >
          Dice Roller
        </button>
      </div> */}
      {/* {view === 'StartScreen' && (
        <StartScreen
          state={state}
          setState={setState}
          nextScreen={nextScreen}
        />
      )}
      {view === 'GameView' && <YahtzeeGame />} */}
      <YahtzeeGame />
      {/* {showDiceRoller && <DiceRoller />} */}
      {/* <Yahtzee /> */}
    </main>
  );
}

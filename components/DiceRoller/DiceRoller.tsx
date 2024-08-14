import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import Dice1Color from '/icons/dice_1_color_42.svg';
import Dice2Color from '/icons/dice_2_color_42.svg';
import Dice3Color from '/icons/dice_3_color_42.svg';
import Dice4Color from '/icons/dice_4_color_42.svg';
import Dice5Color from '/icons/dice_5_color_42.svg';
import Dice6Color from '/icons/dice_6_color_42.svg';

const diceIcons = [
  Dice1Color,
  Dice2Color,
  Dice3Color,
  Dice4Color,
  Dice5Color,
  Dice6Color,
];

const DiceRoller = ({ nDice = 5 }: { nDice?: number }) => {
  const [dice, setDice] = useState(Array.from({ length: nDice }, () => 1));
  const [savedDice, setSavedDice] = useState(
    Array.from({ length: nDice }, () => false)
  );

  function rollDice() {
    const newDice = dice.map((die, index) => {
      if (savedDice[index]) {
        return die;
      }
      return Math.floor(Math.random() * 6) + 1;
    });
    setDice(newDice);
  }

  function saveDice(index: number) {
    const newSavedDice = savedDice.map((die, i) => {
      return i === index ? !die : die;
    });
    setSavedDice(newSavedDice);
  }

  const diceClass = 'w-12 h-12 rounded-md flex items-center justify-center';
  return (
    <div className='fixed bottom-0 flex w-full flex-col gap-2 rounded-t-md bg-cyan-900 p-2'>
      <div className='flex grow justify-center gap-2'>
        {dice.map((die, index) => {
          return (
            <div
              key={index}
              className={twJoin(diceClass, savedDice[index] && 'bg-green-400')}
              onClick={() => saveDice(index)}
            >
              {diceIcons[die - 1]()}
            </div>
          );
        })}
      </div>
      <button
        type='button'
        className='h-12 w-full rounded-md bg-slate-500 text-white'
        onClick={rollDice}
      >
        Roll
      </button>
    </div>
  );
};

export default DiceRoller;

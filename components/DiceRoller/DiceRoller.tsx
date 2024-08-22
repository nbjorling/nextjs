import { twJoin } from 'tailwind-merge';
import Dice1Color from '/icons/dice_1_color_42.svg';
import Dice2Color from '/icons/dice_2_color_42.svg';
import Dice3Color from '/icons/dice_3_color_42.svg';
import Dice4Color from '/icons/dice_4_color_42.svg';
import Dice5Color from '/icons/dice_5_color_42.svg';
import Dice6Color from '/icons/dice_6_color_42.svg';
import DiceQuestionColor from '/icons/dice_question_rounded_color_42.svg';

const diceIcons = [
  DiceQuestionColor,
  Dice1Color,
  Dice2Color,
  Dice3Color,
  Dice4Color,
  Dice5Color,
  Dice6Color,
];

const DiceRoller = ({
  diceValue,
  rollDice,
  lockedDice,
  toggleDiceLock,
  rollsLeft,
  player,
}: {
  nDice?: number;
  diceValue: number[];
  rollDice: () => void;
  lockedDice: boolean[];
  toggleDiceLock: (index: number) => void;
  rollsLeft: number;
  player: string;
}) => {
  const diceClass = 'w-12 h-12 rounded-md flex items-center justify-center';
  return (
    <div className='fixed bottom-0 flex w-full flex-col gap-2 rounded-t-md bg-cyan-900 p-2'>
      <div className='w-full text-center'>{player}`s Turn</div>
      <div className='flex grow justify-center gap-2'>
        {diceValue.map((die, index) => {
          return (
            <div
              key={index}
              className={twJoin(diceClass, lockedDice[index] && 'bg-green-400')}
              onClick={() => toggleDiceLock(index)}
            >
              {diceIcons[die]()}
            </div>
          );
        })}
      </div>
      <button
        type='button'
        className='h-12 w-full rounded-md bg-slate-500 text-white'
        onClick={rollDice}
      >
        Roll ({rollsLeft})
      </button>
    </div>
  );
};

export default DiceRoller;

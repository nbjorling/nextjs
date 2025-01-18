import { useState } from 'react';
import Dice1Color from '/icons/dice_1_color.svg';
import Dice2Color from '/icons/dice_2_color.svg';
import Dice3Color from '/icons/dice_3_color.svg';
import Dice4Color from '/icons/dice_4_color.svg';
import Dice5Color from '/icons/dice_5_color.svg';
import Dice6Color from '/icons/dice_6_color.svg';

type Player = {
  name: string;
  scoreCard: object[];
};

const fields = [
  {
    id: '0',
    label: 'Ones',
    icon: <Dice1Color key={1} />,
    value: 0,
    disabled: false,
  },
  {
    id: '1',
    label: 'Twos',
    icon: <Dice2Color key={1} />,
    value: 0,
    disabled: false,
  },
  {
    id: '2',
    label: 'Threes',
    icon: <Dice3Color key={1} />,
    value: 0,
    disabled: false,
  },
  {
    id: '3',
    label: 'Fours',
    icon: <Dice4Color key={1} />,
    value: 0,
    disabled: false,
  },
  {
    id: '4',
    label: 'Fives',
    icon: <Dice5Color key={1} />,
    value: 0,
    disabled: false,
  },
  {
    id: '5',
    label: 'Sixes',
    icon: <Dice6Color key={1} />,
    value: 0,
    disabled: false,
  },
  { id: '6', label: 'Summary', value: 0, disabled: true },
  { id: '7', label: 'Bonus', value: 0, disabled: true },
  {
    id: '8',
    label: 'One Pair',
    icon: [<Dice1Color key={1} />, <Dice1Color key={2} />],
    value: 0,
    disabled: false,
  },
  {
    id: '9',
    label: 'Two Pairs',
    icon: [
      <Dice2Color key={1} />,
      <Dice2Color key={2} />,
      <Dice3Color key={3} />,
      <Dice3Color key={4} />,
    ],
    value: 0,
    disabled: false,
  },
  {
    id: '10',
    label: 'Three of a kind',
    icon: [
      <Dice4Color key={1} />,
      <Dice4Color key={2} />,
      <Dice4Color key={3} />,
    ],
    value: 0,
    disabled: false,
  },
  {
    id: '11',
    label: 'Four of a kind',
    icon: [
      <Dice5Color key={1} />,
      <Dice5Color key={2} />,
      <Dice5Color key={3} />,
      <Dice5Color key={4} />,
    ],
    value: 0,
    disabled: false,
  },
  {
    id: '12',
    label: 'Small Ladder',
    icon: [
      <Dice1Color key={1} />,
      <Dice2Color key={2} />,
      <Dice3Color key={3} />,
      <Dice4Color key={4} />,
      <Dice5Color key={5} />,
    ],
    value: 0,
    disabled: false,
  },
  {
    id: '13',
    label: 'Big Ladder',
    icon: [
      <Dice2Color key={1} />,
      <Dice3Color key={2} />,
      <Dice4Color key={3} />,
      <Dice5Color key={4} />,
      <Dice6Color key={5} />,
    ],
    value: 0,
    disabled: false,
  },
  {
    id: '14',
    label: 'House',
    value: 0,
    icon: [
      <Dice6Color key={1} />,
      <Dice6Color key={2} />,
      <Dice6Color key={3} />,
      <Dice5Color key={4} />,
      <Dice5Color key={5} />,
    ],
    disabled: false,
  },
  {
    id: '15',
    label: 'Chance',
    icon: [
      <Dice2Color key={1} />,
      <Dice6Color key={2} />,
      <Dice4Color key={3} />,
      <Dice5Color key={4} />,
      <Dice5Color key={5} />,
    ],
    value: 0,
    disabled: false,
  },
  {
    id: '16',
    label: 'Yahtzee',
    icon: [
      <Dice1Color key={1} />,
      <Dice1Color key={2} />,
      <Dice1Color key={3} />,
      <Dice1Color key={4} />,
      <Dice1Color key={5} />,
    ],
    value: 0,
    disabled: false,
  },
  { id: '17', label: 'Total', value: 0, disabled: true },
];

const borderColor = 'border border-slate-900/40';

const ScoreCard = ({ player, onUpdate, updateName }) => {
  return (
    <table className={`w-full min-w-[90px] `}>
      <tbody>
        <tr
          className={`flex h-10 whitespace-nowrap bg-slate-900 ${borderColor} `}
        >
          <td className='h-full'>
            <input
              onChange={(event) => updateName(event)}
              value={player.name}
              className='h-full  w-full bg-slate-900 px-2 text-white'
              type='string'
            />
          </td>
        </tr>
        {player.scoreCard.map((field) => {
          let backgroundColor = 'bg-slate-800';
          if (field.value > 0) backgroundColor = 'bg-lime-800 text-white';
          if (field.disabled && field.value > 0)
            backgroundColor = 'bg-lime-800 text-white';

          if (field.id === '7' && field.value === 0)
            backgroundColor = 'bg-red-900 text-white';
          return (
            <tr
              className={`flex h-10 w-full min-w-0 whitespace-nowrap ${backgroundColor} ${borderColor}`}
              key={field.id}
              id={field.id}
            >
              <td className='flex h-full self-center '>
                <input
                  key={player.name + field.id}
                  onChange={(event) => onUpdate({ fieldId: field.id, event })}
                  value={field.value === 0 ? '' : field.value}
                  className={`h-full w-full min-w-0 px-3 ${backgroundColor}`}
                  type='tel'
                  disabled={field.disabled}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const Yahtzee = () => {
  const [players, setPlayers] = useState([
    { name: 'Player 1', scoreCard: JSON.parse(JSON.stringify(fields)) },
  ]);
  const [useIcons, setUseIcons] = useState(false);
  function addPlayer() {
    const newPlayer = {
      name: `Player ${players.length + 1}`,
      scoreCard: JSON.parse(JSON.stringify(fields)),
    };
    setPlayers((previous) => [...previous, newPlayer]);
  }

  function toggleIcons() {
    setUseIcons((previous) => !previous);
  }

  function updateName({ event, index }) {
    const copy = [...players];
    const player = copy[index];
    player.name = event.target.value;
    setPlayers(copy);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function updatePlayer({ playerIndex, fieldId, event, playerName }) {
    const copyState = [...players];
    const scoreCard = copyState[playerIndex].scoreCard;
    const fieldIndex = scoreCard.findIndex((field) => field.id === fieldId);
    const reg = new RegExp('^[0-9]*$');
    scoreCard[fieldIndex].value = reg.test(event.target.value)
      ? event.target.value
      : 0;
    copyState[playerIndex].scoreCard = scoreCard;

    scoreCard[6].value =
      parseFloat(scoreCard[0].value) +
      parseFloat(scoreCard[1].value) +
      parseFloat(scoreCard[2].value) +
      parseFloat(scoreCard[3].value) +
      parseFloat(scoreCard[4].value) +
      parseFloat(scoreCard[5].value);

    if (parseFloat(scoreCard[6].value) >= 63) {
      scoreCard[7].value = 50;
    } else {
      scoreCard[7].value = 0;
    }

    scoreCard[17].value =
      parseFloat(scoreCard[6].value) +
      parseFloat(scoreCard[7].value) +
      parseFloat(scoreCard[8].value) +
      parseFloat(scoreCard[9].value) +
      parseFloat(scoreCard[10].value) +
      parseFloat(scoreCard[11].value) +
      parseFloat(scoreCard[12].value) +
      parseFloat(scoreCard[13].value) +
      parseFloat(scoreCard[14].value) +
      parseFloat(scoreCard[15].value) +
      parseFloat(scoreCard[16].value);

    setPlayers(copyState);
  }

  return (
    <div className='font-convergence w-full flex-row bg-slate-900 p-4 text-black'>
      <div className='mb-2 flex'>
        <button
          className='shrink-0 rounded bg-orange-300 py-2 px-4'
          onClick={() => toggleIcons()}
          type='button'
        >
          Toggle Icons
        </button>
        <h1 className='font-convergence w-full pb-2 text-center text-2xl text-white'>
          Yahtzee
        </h1>
        <button
          className='shrink-0 rounded bg-green-300 py-2 px-4'
          onClick={() => addPlayer()}
          type='button'
        >
          Add player
        </button>
      </div>
      <div className='flex w-full overflow-scroll rounded bg-slate-900 p-2'>
        <table className='w-full text-left'>
          <tbody>
            <tr className='h-10 whitespace-nowrap'>
              <td
                className={`flex h-10 items-center whitespace-nowrap bg-slate-700 px-2 text-white ${borderColor}`}
              >
                Player
              </td>
            </tr>
            {fields.map((field) => {
              const labelElement = useIcons ? field.icon : field.label;
              return (
                <tr
                  className={`flex h-10 overflow-hidden whitespace-nowrap bg-slate-800 text-white ${borderColor} ${
                    field.id === '17' && 'bg-gray-900'
                  }
                  `}
                  key={field.id}
                  id={field.id}
                >
                  <td className='flex self-center px-2'>
                    {labelElement ? labelElement : field.label}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {players.map((player: Player, index: number) => {
          return (
            <ScoreCard
              key={index}
              player={player}
              onUpdate={({ fieldId, event }) =>
                updatePlayer({
                  playerIndex: index,
                  fieldId: fieldId,
                  event: event,
                  playerName: player.name,
                })
              }
              updateName={(event) => updateName({ index, event })}
            />
          );
        })}
      </div>
    </div>
  );
};

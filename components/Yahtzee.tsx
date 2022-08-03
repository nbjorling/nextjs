import React, { useEffect, useState } from "react";
import Dice1Color from "../icons/dice_1_color.svg";
import Dice2Color from "../icons/dice_2_color.svg";
import Dice3Color from "../icons/dice_3_color.svg";
import Dice4Color from "../icons/dice_4_color.svg";
import Dice5Color from "../icons/dice_5_color.svg";
import Dice6Color from "../icons/dice_6_color.svg";

type Player = {
  name: string;
  scoreCard: object[];
};

const fields = [
  { id: "0", label: "Ones", icon: <Dice1Color />, value: 0, disabled: false },
  { id: "1", label: "Twos", icon: <Dice2Color />, value: 0, disabled: false },
  { id: "2", label: "Threes", icon: <Dice3Color />, value: 0, disabled: false },
  { id: "3", label: "Fours", icon: <Dice4Color />, value: 0, disabled: false },
  { id: "4", label: "Fives", icon: <Dice5Color />, value: 0, disabled: false },
  { id: "5", label: "Sixes", icon: <Dice6Color />, value: 0, disabled: false },
  { id: "6", label: "Summary", value: 0, disabled: true },
  { id: "7", label: "Bonus", value: 0, disabled: true },
  { id: "8", label: "One Pair", icon: [<Dice1Color />, <Dice1Color />], value: 0, disabled: false },
  {
    id: "9",
    label: "Two Pairs",
    icon: [<Dice2Color />, <Dice2Color />, <Dice3Color />, <Dice3Color />],
    value: 0,
    disabled: false,
  },
  {
    id: "10",
    label: "Three of a kind",
    icon: [<Dice4Color />, <Dice4Color />, <Dice4Color />],
    value: 0,
    disabled: false,
  },
  {
    id: "11",
    label: "Four of a kind",
    icon: [<Dice5Color />, <Dice5Color />, <Dice5Color />, <Dice5Color />],
    value: 0,
    disabled: false,
  },
  {
    id: "12",
    label: "Small Ladder",
    icon: [<Dice1Color />, <Dice2Color />, <Dice3Color />, <Dice4Color />, <Dice5Color />],
    value: 0,
    disabled: false,
  },
  {
    id: "13",
    label: "Big Ladder",
    icon: [<Dice2Color />, <Dice3Color />, <Dice4Color />, <Dice5Color />, <Dice6Color />],
    value: 0,
    disabled: false,
  },
  {
    id: "14",
    label: "House",
    value: 0,
    icon: [<Dice6Color />, <Dice6Color />, <Dice6Color />, <Dice5Color />, <Dice5Color />],
    disabled: false,
  },
  {
    id: "15",
    label: "Chance",
    icon: [<Dice2Color />, <Dice6Color />, <Dice4Color />, <Dice5Color />, <Dice5Color />],
    value: 0,
    disabled: false,
  },
  {
    id: "16",
    label: "Yahtzee",
    icon: [<Dice1Color />, <Dice1Color />, <Dice1Color />, <Dice1Color />, <Dice1Color />],
    value: 0,
    disabled: false,
  },
  { id: "17", label: "Total", value: 0, disabled: true },
];

const borderColor = "border-r border-t border-l border-slate-400";

const ScoreCard = ({ player, onUpdate, updateName }) => {
  return (
    <table className={`w-full min-w-[90px] `}>
      <tbody>
        <tr className={`h-10 flex whitespace-nowrap bg-slate-300 ${borderColor} `}>
          <td className="h-full">
            <input
              onChange={(event) => updateName(event)}
              value={player.name}
              className="w-full  h-full px-2 bg-slate-300"
              type="string"
            />
          </td>
        </tr>
        {player.scoreCard.map((field) => {
          let backgroundColor = "bg-slate-200";
          if (field.value > 0) backgroundColor = "bg-lime-200";
          if (field.disabled && field.value > 0) backgroundColor = "bg-lime-500";

          if (field.id === "7" && field.value === 0) backgroundColor = "bg-red-200";
          return (
            <tr
              className={`min-w-0 w-full whitespace-nowrap flex h-10 ${backgroundColor} ${borderColor}`}
              key={field.id}
              id={field.id}
            >
              <td className="flex self-center h-full ">
                <input
                  key={player.name + field.id}
                  onChange={(event) => onUpdate({ fieldId: field.id, event })}
                  value={field.value === 0 ? "" : field.value}
                  className={`min-w-0 w-full h-full px-3 ${backgroundColor}`}
                  type="tel"
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
  const [players, setPlayers] = useState([{ name: "Player 1", scoreCard: JSON.parse(JSON.stringify(fields)) }]);
  const [useIcons, setUseIcons] = useState(false);
  function addPlayer() {
    const newPlayer = { name: `Player ${players.length + 1}`, scoreCard: JSON.parse(JSON.stringify(fields)) };
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

  function updatePlayer({ playerIndex, fieldId, event, playerName }) {
    const copyState = [...players];
    const scoreCard = copyState[playerIndex].scoreCard;
    const fieldIndex = scoreCard.findIndex((field) => field.id === fieldId);
    const reg = new RegExp("^[0-9]*$");
    scoreCard[fieldIndex].value = reg.test(event.target.value) ? event.target.value : 0;
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
    <div className="w-full p-4 flex-row bg-slate-800 font-convergence">
      <div className="absolute right-0">
        <button className="bg-green-300 p-1 pl-2 rounded-l" onClick={() => addPlayer()}>
          Add player
        </button>
      </div>
      <div className="absolute left-0">
        <button className="bg-orange-300 p-1 pr-2 rounded-r" onClick={() => toggleIcons()}>
          Toggle Icons
        </button>
      </div>
      <h1 className="text-2xl text-white w-full text-center pb-2 font-convergence">Yahtzee</h1>
      <div className="w-full flex overflow-scroll p-2 rounded bg-slate-300">
        <table className="w-full text-left">
          <tbody>
            <tr className="h-10 whitespace-nowrap">
              <td className={`h-10 flex items-center whitespace-nowrap bg-slate-100 px-2 ${borderColor}`}>Player</td>
            </tr>
            {fields.map((field) => {
              let labelElement = useIcons ? field.icon : field.label;
              return (
                <tr
                  className={`h-10 flex whitespace-nowrap overflow-hidden bg-slate-300 ${borderColor} ${
                    field.id === "17" && "bg-gray-400"
                  }
                  `}
                  key={field.id}
                  id={field.id}
                >
                  <td className="flex self-center px-2">{labelElement ? labelElement : field.label}</td>
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
                updatePlayer({ playerIndex: index, fieldId: fieldId, event: event, playerName: player.name })
              }
              updateName={(event) => updateName({ index, event })}
            />
          );
        })}
      </div>
    </div>
  );
};

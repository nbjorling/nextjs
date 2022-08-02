import React, { useEffect, useState } from "react";

type Player = {
  name: string;
  scoreCard: object[];
};

const fields = [
  { id: "0", label: "Ones", value: 0, disabled: false },
  { id: "1", label: "Twos", value: 0, disabled: false },
  { id: "2", label: "Threes", value: 0, disabled: false },
  { id: "3", label: "Fours", value: 0, disabled: false },
  { id: "4", label: "Fives", value: 0, disabled: false },
  { id: "5", label: "Sixes", value: 0, disabled: false },
  { id: "6", label: "Summary", value: 0, disabled: true },
  { id: "7", label: "Bonus", value: 0, disabled: true },
  { id: "8", label: "One Pair", value: 0, disabled: false },
  { id: "9", label: "Two Pairs", value: 0, disabled: false },
  { id: "10", label: "Three of a kind", value: 0, disabled: false },
  { id: "11", label: "Four of a kind", value: 0, disabled: false },
  { id: "12", label: "Small Ladder", value: 0, disabled: false },
  { id: "13", label: "Big Ladder", value: 0, disabled: false },
  { id: "14", label: "House", value: 0, disabled: false },
  { id: "15", label: "Chance", value: 0, disabled: false },
  { id: "16", label: "Yahtze", value: 0, disabled: false },
  { id: "17", label: "Total", value: 0, disabled: true },
];

const ScoreCard = ({ player, onUpdate, updateName }) => {
  return (
    <table className="w-full border border-white min-w-[100px]">
      <tbody>
        <tr className="h-10 whitespace-nowrap bg-slate-300">
          <th className="px-2">
            <input
              onChange={(event) => updateName(event)}
              value={player.name}
              className="w-full bg-slate-300"
              type="string"
            />
          </th>
        </tr>
        {player.scoreCard.map((field) => {
          let backgroundColor = "bg-slate-200";
          if (field.value > 0) backgroundColor = "bg-lime-200";
          if (field.disabled && field.value > 0) backgroundColor = "bg-lime-500";

          if (field.id === "7" && field.value === 0) backgroundColor = "bg-red-200";
          return (
            <tr className={`min-w-0 w-full whitespace-nowrap h-10 ${backgroundColor}`} key={field.id} id={field.id}>
              <td className="border border-white px-3 ">
                <input
                  key={player.name + field.id}
                  onChange={(event) => onUpdate({ fieldId: field.id, event })}
                  value={field.value === 0 ? "" : field.value}
                  className={`min-w-0 w-full ${backgroundColor}`}
                  type="number"
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

export const Scoreboard = () => {
  const [players, setPlayers] = useState([{ name: "Player 1", scoreCard: JSON.parse(JSON.stringify(fields)) }]);

  function addPlayer() {
    const newPlayer = { name: `Player ${players.length + 1}`, scoreCard: JSON.parse(JSON.stringify(fields)) };
    setPlayers((previous) => [...previous, newPlayer]);
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
    scoreCard[fieldIndex].value = event.target.value ? event.target.value : 0;
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
    <div className="w-full p-4 flex-row bg-slate-400 ">
      <div className="fixed right-0">
        <button className="bg-green-300 p-1 pl-2 rounded-l" onClick={() => addPlayer()}>
          Add player
        </button>
      </div>
      <h1 className="font-serif text-2xl text-white pb-2">Yahtze</h1>
      <div className="w-full flex overflow-scroll p-2 rounded bg-slate-300">
        <table className="w-full text-left border">
          <tbody>
            <tr className="h-10 whitespace-nowrap">
              <th className="h-10 whitespace-nowrap bg-slate-100 px-2">Player</th>
            </tr>
            {fields.map((field) => {
              return (
                <tr className="h-10 whitespace-nowrap overflow-hidden bg-slate-300" key={field.id} id={field.id}>
                  <td className="border px-2">{field.label}</td>
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

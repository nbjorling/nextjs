import React from "react";
import { players } from "./helpers/players";
import { course } from "./helpers/course";

function mapHandicap(player) {
  if (!player) return;

  const handicap = player.handicap;

  const calculateExtraShots = (arr, holes) => {
    return arr.map((hole, index) => {
      if (handicap >= hole.handicap) {
        let extra = 1;
        if (handicap >= hole.handicap + 18) {
          extra++;
          if (handicap >= hole.handicap + 36) {
            extra++;
          }
        }
        return { ...holes[index], extraShots: extra, par: hole.par };
      } else {
        return { ...holes[index], extraShots: 0, par: hole.par };
      }
    });
  };

  const updatedOutHoles = calculateExtraShots(course.out.holes, player.scoreCard.out.holes);
  const updatedInHoles = calculateExtraShots(course.in.holes, player.scoreCard.in.holes);
  player.scoreCard.out.holes = updatedOutHoles;
  player.scoreCard.in.holes = updatedInHoles;
  const updatedPlayer = {
    ...player,
  };

  console.log("Koca: updatedPlayer ", updatedPlayer);
  return updatedPlayer;
}

const ScoreCard = ({ player }) => {
  mapHandicap(player);

  return (
    <tr>
      <td className="text-left">{player.name}</td>
      {player.scoreCard.out.holes.map((hole, index) => {
        const scoreBalance = hole.score - (hole.par + hole.extraShots);
        let bgColor = " bg-white";
        if (scoreBalance < 0) bgColor = " bg-[#77dd77] bg-opacity-100 text-red-600";
        if (scoreBalance > 0) bgColor = " bg-blue-400 bg-opacity-100";
        return (
          <td key={index}>
            <div className={`min-w-20 mt-4 bg-white bg-opacity-50 border-black border ${bgColor}`}>
              {hole.score !== 0 && hole.score}
              {hole.score !== 0 && typeof scoreBalance === "number" && ` (${scoreBalance})`}
            </div>
          </td>
        );
      })}
      <td></td>
      {player.scoreCard.in.holes.map((hole, index) => {
        const scoreBalance = hole.score - (hole.par + hole.extraShots);
        let bgColor = " bg-white";
        if (scoreBalance < 0) bgColor = " bg-[#77dd77] bg-opacity-100 text-red-600";
        if (scoreBalance > 0) bgColor = " bg-blue-400 bg-opacity-100";
        return (
          <td key={index}>
            <div className={`min-w-20 mt-4 bg-white bg-opacity-50 border-black border ${bgColor}`}>
              {hole.score !== 0 && hole.score}
              {hole.score !== 0 && typeof scoreBalance === "number" && ` (${scoreBalance})`}
            </div>
          </td>
        );
      })}
      <td>{player.result}</td>
      <td className={player.toPar > 0 ? "" : "text-red-500"}>{player.toPar > 0 ? `+${player.toPar}` : player.toPar}</td>
      <td>{player.holesPlayed}</td>
    </tr>
  );
};

export const GolfScoreCard = () => {
  const parsePlayerData = (players) => {
    return players.map((player) => {
      let holesPlayed = 0;
      let result = 0;
      let par = 0;

      player.scoreCard.out.holes.forEach((hole) => {
        if (hole.score === 0) return;
        holesPlayed = holesPlayed += 1;
        result = result += hole.score;
        par = par += hole.par;
      });

      player.scoreCard.in.holes.forEach((hole) => {
        if (hole.score === 0) return;
        holesPlayed = holesPlayed += 1;
        result = result += hole.score;
        par = par += hole.par;
      });

      let net = result;

      player.scoreCard.out.holes.forEach((hole) => {
        if (hole.score === 0) return;
        net -= hole.extraShots;
      });

      player.scoreCard.out.holes.forEach((hole) => {
        if (hole.score === 0) return;
        net -= hole.extraShots;
      });

      const toPar = net - par;

      return { ...player, toPar, net, result, holesPlayed };
    });
  };

  const playersData = parsePlayerData(players).sort((a, b) => a.toPar - b.toPar);

  return (
    <div className="w-full p-4 flex-row bg-gradient-to-tr from-emerald-900 to-emerald-400 font-convergence min-h-screen">
      <div className="w-full flex  p-2 rounded bg-white bg-opacity-40 ">
        <table className="w-full text-center">
          <tbody>
            <tr className="h-4 text-center">
              <th className="text-left w-80">Hole</th>

              {course.out.holes.map((hole, index) => {
                return (
                  <th key={index} className="min-w-40">
                    {hole.label}
                  </th>
                );
              })}
              <th>--</th>
              {course.in.holes.map((hole, index) => {
                return (
                  <th key={index} className="min-w-40">
                    {hole.label}
                  </th>
                );
              })}
            </tr>
            <tr className="border-b-2 h-10 text-center">
              <th className="text-left">Par</th>
              {course.out.holes.map((hole, index) => {
                return (
                  <th key={index} className="min-w-40">
                    {hole.par}
                  </th>
                );
              })}

              <th></th>

              {course.in.holes.map((hole, index) => {
                return (
                  <th key={index} className="min-w-40">
                    {hole.par}
                  </th>
                );
              })}

              <th>Result</th>
              <th>To par</th>
              <th># Played</th>
            </tr>
            {playersData.map((player, index) => {
              return <ScoreCard key={index} player={player} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

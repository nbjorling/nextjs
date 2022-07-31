import React, { useEffect, useState } from "react";

export const Scoreboard = () => {
  return (
    <div className="">
      <table className="bg-green-300 w-full text-left">
        <thead>
          <tr>
            <th>Team</th>
            <th>Mthrfck</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Here we go</td>
            <td>Mtdrfck</td>
            <td>Total Score</td>
          </tr>
        </tbody>
      </table>
      <div className="py-2">
        <button className="bg-green-500 p-2" onClick={() => console.log("clicked")}>
          Add User
        </button>
      </div>
    </div>
  );
};

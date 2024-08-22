import { useEffect, useState } from 'react';
import DiceRoller from '../DiceRoller';

// Initial state for the game
const initialGameState = {
  currentPlayer: 0,
  players: [
    { name: 'Player 1', scores: {} },
    { name: 'Player 2', scores: {} },
  ],
  dice: [0, 0, 0, 0, 0],
  lockedDice: [false, false, false, false, false],
  rollsLeft: 3,
};

const categories = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes']; // Add more as needed

function YahtzeeGame() {
  const [gameState, setGameState] = useState(initialGameState);

  // Load game state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('yahtzeeGameState');
    if (savedState) {
      setGameState(JSON.parse(savedState));
    }
  }, []);

  // Save game state to localStorage whenever gameState changes
  useEffect(() => {
    localStorage.setItem('yahtzeeGameState', JSON.stringify(gameState));
  }, [gameState]);

  const rollDice = () => {
    if (gameState.rollsLeft > 0) {
      const newDice = gameState.dice.map((die, index) =>
        gameState.lockedDice[index] ? die : Math.floor(Math.random() * 6) + 1
      );

      setGameState((prevState) => ({
        ...prevState,
        dice: newDice,
        rollsLeft: prevState.rollsLeft - 1,
      }));
    }
  };

  // Toggle the lock state of a specific dice
  const toggleDiceLock = (index) => {
    setGameState((prevState) => {
      if (prevState.dice[index] === 0) return prevState;
      const newLocked = [...prevState.lockedDice];
      newLocked[index] = !newLocked[index];
      return { ...prevState, lockedDice: newLocked };
    });
  };

  // Move to the next player and reset rolls
  const nextPlayer = () => {
    setGameState((prevState) => ({
      ...prevState,
      currentPlayer: (prevState.currentPlayer + 1) % prevState.players.length,
      rollsLeft: 3,
      lockedDice: [false, false, false, false, false], // unlock dice for next player
      dice: [0, 0, 0, 0, 0], // reset dice for next player
    }));
  };

  // Assign a score to a category
  const assignScore = (category) => {
    const currentPlayer = gameState.currentPlayer;
    const playerScores = gameState.players[currentPlayer].scores;

    if (!playerScores[category]) {
      const score = calculateScore(category);
      console.log('Koca: score ', score);

      // Update the score for the current player in the chosen category
      const newPlayers = gameState.players.map((player, index) =>
        index === currentPlayer
          ? { ...player, scores: { ...player.scores, [category]: score } }
          : player
      );

      setGameState((prevState) => ({
        ...prevState,
        players: newPlayers,
      }));

      nextPlayer();
    }
  };

  // Calculate the score for a specific category based on dice values
  const calculateScore = (category) => {
    const dice = gameState.dice;
    console.log('Koca: category ', category);
    console.log('Koca: dice ', dice);
    switch (category) {
      case 'ones':
        return dice.filter((die) => die === 1).length * 1;
        return dice.filter((die) => die === 2).length * 2;
      case 'threes':
        return dice.filter((die) => die === 3).length * 3;
      case 'fours':
        return dice.filter((die) => die === 4).length * 4;
      case 'fives':
        return dice.filter((die) => die === 5).length * 5;
      case 'sixes':
        return dice.filter((die) => die === 6).length * 6;
      // Add logic for other categories such as Three of a Kind, Full House, etc.
      default:
        return 0;
    }
  };

  // // Reset the game
  // const resetGame = () => {
  //   setGameState(initialGameState);
  //   localStorage.removeItem('yahtzeeGameState');
  // };

  return (
    <div className='flex flex-col gap-2 pt-4 text-white'>
      <div className='after: flex gap-4 px-2 pb-4'>
        {gameState.players.map((player, index) => (
          <div key={index} className='grow'>
            <h3>{player.name}`s Scores</h3>
            <ul className='flex flex-col gap-4'>
              {categories.map((category) => (
                <li key={category}>
                  <div
                    className='rounded bg-cyan-700 p-1'
                    onClick={() => assignScore(category)}
                  >
                    {player.scores[category] || category}
                  </div>
                </li>
              ))}
              <li key='bonus'>
                <div className='rounded bg-green-700 p-1'>
                  Total:{' '}
                  {Object.values<number>(player.scores).reduce(
                    (acc, score) => acc + score,
                    0
                  )}
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <DiceRoller
        player={gameState.players[gameState.currentPlayer].name}
        diceValue={gameState.dice}
        rollDice={rollDice}
        lockedDice={gameState.lockedDice}
        toggleDiceLock={toggleDiceLock}
        rollsLeft={gameState.rollsLeft}
      />
    </div>
  );
}

export default YahtzeeGame;

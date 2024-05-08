import * as React from 'react';
import FlippableCard from '../components/FlippableCard/FlippableCard';
// import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import categories from '../public/assets/jeopardy.json';

const Jeopardy: React.FC = () => {
  const [finale, setFinale] = React.useState(false);
  const jingle = React.useRef<HTMLAudioElement | undefined>();

  const toggleFinale = () => setFinale(!finale);

  const playJingle = () => {
    jingle.current && jingle.current.play();
    console.log('play');
  };

  React.useEffect(() => {
    jingle.current = new Audio('/assets/jeopardy_jingle.mp3');
  }, []);

  return (
    <main className='flex h-[100vh] w-screen flex-col bg-black'>
      <div className='flex w-full flex-row gap-2 p-4'>
        {finale ? (
          <FlippableCard
            frontText='Final frågan!'
            frontTextSize='text-9xl'
            backText='Så heter Alfons Åbergs pappa'
            backTextSize='text-7xl'
            height='min-h-[90%]'
            width='min-w-[60%]'
          />
        ) : (
          categories.map((category) => (
            <div
              key={category.name}
              className='flex h-full grow flex-col gap-2'
            >
              <FlippableCard
                frontText={category.name}
                frontTextSize='lg:text-4xl text-md'
              />
              {category.questions.map((question, index) => {
                const frontText = `${(index + 1) * 100}`;
                return (
                  <FlippableCard
                    key={question}
                    frontText={frontText}
                    backText={question}
                  />
                );
              })}
            </div>
          ))
        )}
        {/* <ScoreBoard /> */}
      </div>
      <div className='flex flex-row justify-evenly'>
        <button type='button' onClick={toggleFinale}>
          <p className='text-yellow-300'>Finale!</p>
        </button>
        <button type='button' onClick={playJingle}>
          <p className='text-yellow-300'>Jingle!</p>
        </button>
      </div>
    </main>
  );
};

export default Jeopardy;

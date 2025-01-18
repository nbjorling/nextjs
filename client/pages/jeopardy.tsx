import * as React from 'react';
import FlippableCard from '../components/FlippableCard/FlippableCard';
// import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
// import categories from '../public/assets/jeopardy.json';
import { Axe, FrameCorners, MusicNotes } from '@phosphor-icons/react';
import answers2 from '../public/assets/answers2.json';

const Jeopardy: React.FC = () => {
  const [finale, setFinale] = React.useState(false);
  const jingle = React.useRef<HTMLAudioElement | undefined>();
  const jeopardyRef = React.useRef<HTMLDivElement>();
  const toggleFinale = () => setFinale(!finale);

  const playJingle = () => {
    jingle.current && jingle.current.play();
    console.log('play');
  };

  React.useEffect(() => {
    jingle.current = new Audio('/assets/jeopardy_jingle.mp3');
  }, []);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      jeopardyRef.current.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  }

  const buttonClasses =
    'flex gap-2 items-center bg-emerald-800 rounded-xl p-1 px-4 text-emerald-100';

  return (
    <main
      className='absolute top-0 flex h-screen w-screen flex-col bg-black'
      ref={jeopardyRef}
    >
      <div className='flex h-full w-full flex-row gap-2 p-4 pb-12'>
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
          answers2.map((category) => (
            <div
              key={category.name}
              className='flex h-full grow flex-col gap-2'
            >
              <FlippableCard
                frontText={category.name}
                frontTextSize='lg:text-4xl text-md'
                bgColor='bg-cyan-900'
              />
              {category.questions.map((question, index) => {
                const frontText = `${(index + 1) * 100}`;
                return (
                  <FlippableCard
                    key={question.answer}
                    frontText={frontText}
                    backText={question.answer}
                  />
                );
              })}
            </div>
          ))
        )}
        {/* <ScoreBoard /> */}
      </div>
      <div className='absolute bottom-0 flex justify-center pl-4 pb-2'>
        <div className='mx-auto flex flex-row gap-2'>
          <button
            type='button'
            onClick={toggleFinale}
            className={buttonClasses}
          >
            <Axe /> Final Question
          </button>
          <button type='button' onClick={playJingle} className={buttonClasses}>
            <MusicNotes /> Jingle
          </button>
          <button
            type='button'
            onClick={toggleFullscreen}
            className={buttonClasses}
          >
            <FrameCorners /> Fullscreen
          </button>
        </div>
      </div>
    </main>
  );
};

export default Jeopardy;

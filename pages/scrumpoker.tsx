import * as React from 'react';
import PageLayout from '../components/PageLayout/PageLayout';

const CHOICES = [0, '1/2', 1, 2, 3, 5, 8, 13, 20, 40, 100, '?', '∞'];

export default function ScrumPoker() {
  const [choice, setChoice] = React.useState(undefined);
  const [show, setShow] = React.useState(false);

  const nextAction = () => {
    if (!show) {
      setShow(true);
    }
    if (show) {
      setShow(false);
      setChoice(undefined);
    }
  };

  return (
    <PageLayout fullscreen>
      {choice && (
        <div className='fixed inset-x-4 bottom-14 top-4 flex shadow-xl backdrop-blur-sm'>
          <div
            onClick={() => {
              nextAction();
            }}
            className='flex grow cursor-pointer items-center justify-center rounded bg-slate-900 text-white'
          >
            {choice && show && (
              <div>
                <p className='text-center text-[128px]'>{choice}</p>
                <p className='text-center text-lg text-slate-300'>
                  Click again to close
                </p>
              </div>
            )}
            {choice && !show && (
              <p className='text-center text-5xl'>Click to reveal</p>
            )}
          </div>
        </div>
      )}
      <div className='fixed bottom-10 grid w-full grid-cols-3 gap-2 p-4'>
        {CHOICES.map((choice, index) => {
          const string =
            typeof choice === 'string' ? choice : choice.toString();

          return (
            <div
              key={index}
              className='flex h-20 w-full cursor-pointer rounded bg-slate-700 p-2 text-center  text-orange-500 hover:bg-slate-600 '
              onClick={() => {
                setChoice(string);
              }}
            >
              <p className='w-full self-center text-center'>{string}</p>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}

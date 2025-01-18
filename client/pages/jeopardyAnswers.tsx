import * as React from 'react';
import answers2 from '../public/assets/answers2.json';

const QuestionsView = () => {
  return (
    <div className='m-8 flex flex-col gap-8 p-4'>
      {answers2.map((category) => {
        return (
          <div key={category.name} className='rounded-xl bg-slate-900 p-4'>
            <h3 className='mb-2 w-full text-center text-2xl'>
              {category.name}
            </h3>
            <div>
              {category.questions.map((category, index) => {
                return (
                  <div
                    key={category.answer}
                    className='2 mb-4 flex items-center rounded bg-slate-700 p-2 font-bold'
                  >
                    <h3 className='mr-2 h-full p-1 text-xl'>{`${
                      index + 1
                    }00`}</h3>
                    <div className='flex flex-col border-l-2 pl-2'>
                      <p className='font-bold'>{category.answer}</p>
                      <p className='text-yellow-300'>{category.question}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
const Jeopardy: React.FC = () => {
  const [password, setPassword] = React.useState<string>('');
  const [showQuestions, setShowQuestions] = React.useState(false);

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    if (password === 'afap') setShowQuestions(true);
    else alert('Noob');
  };

  return (
    <main className='absolute top-0 flex h-screen w-screen flex-col bg-black text-white'>
      {showQuestions ? (
        <QuestionsView />
      ) : (
        <div className='m-8 flex flex-col gap-8 rounded bg-slate-400 p-4 text-black'>
          <input
            onChange={(e) => updatePassword(e)}
            placeholder='Password please'
          />
          <button onClick={submit} type='button'>
            Submit
          </button>
        </div>
      )}
    </main>
  );
};

export default Jeopardy;

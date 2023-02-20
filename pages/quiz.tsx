import * as React from 'react';

type ChoiceProps = {
  text: string;
  correct: boolean;
};

type ChoiceElementProps = {
  choice: ChoiceProps;
  selected: boolean;
  onClick: () => void;
};

type QuestionProps = {
  question: string;
  choices: ChoiceProps[];
  correctAnswer: number;
};

type QuestionComponentProps = {
  question: QuestionProps;
  onClick: ({ questionIndex, choiceIndex }) => void;
  questionChoice: number;
  questionIndex: number;
};

type QuizDataProps = {
  title: string;
  description: string;
  timeLimitInSeconds?: number | undefined;
  questions: QuestionProps[];
};

const QUIZ_DATA: QuizDataProps = {
  title: 'Quiz Title',
  description: 'Quiz description goes here for as good as I know',
  questions: [
    {
      question: 'Vad är 1+1?',
      choices: [
        { text: '2', correct: true },
        { text: '3', correct: false },
        { text: '4', correct: false },
      ],
      correctAnswer: 0,
    },
    {
      question: 'Rätt svar borde vara tre?',
      choices: [
        { text: 'Ett', correct: false },
        { text: 'Två', correct: false },
        { text: 'Tre', correct: true },
      ],
      correctAnswer: 2,
    },
    {
      question:
        'Saying the name of what dried fruit used to be used to encourage people to smile before a photo in the 1800s, before the phrase “cheese?”',
      choices: [
        { text: 'Prunes', correct: false },
        { text: 'Kiwis', correct: false },
        {
          text: 'En låååååååång text för att se hur ett långt svar skulle kunna se ut i denna quiz',
          correct: true,
        },
      ],
      correctAnswer: 2,
    },
  ],
};

const AnimatedBorderContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className='relative h-[70vh] min-h-[200px] w-full overflow-hidden rounded-lg shadow-xl'>
      <div
        className='absolute -left-[100%] -top-[100%] z-0 h-[300%] w-[300%] animate-rotate'
        style={{
          background:
            'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
          backgroundSize: '100% 100%',
          transform: 'translateY(0)',
          transformOrigin: '0, 0',
        }}
      ></div>
      <div className='transition-color absolute left-[2px] top-[2px] z-10 h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-lg bg-slate-700 p-4 duration-300 '>
        {children}
      </div>
    </div>
  );
};

const Choice: React.FC<ChoiceElementProps> = ({
  choice,
  selected,
  onClick,
}) => {
  const bgStyle = selected && 'outline-2 outline-slate-300';
  const styles =
    'p-2 my-4 cursor-pointer bg-slate-600  hover:bg-slate-500 rounded';
  return (
    <div className={[bgStyle, styles].join(' ')} onClick={onClick}>
      <div className='flex justify-between'>
        <p>{choice.text}</p>
        {selected && <p className='text-yellow-400'>Selected</p>}
      </div>
    </div>
  );
};

const Question: React.FC<QuestionComponentProps> = ({
  question,
  onClick,
  questionChoice,
  questionIndex,
}) => {
  return (
    <div className='p-4 text-white'>
      <div>{question?.question}</div>
      {question?.choices?.map((choice, index) => {
        const clickHandler = () => {
          onClick({ questionIndex, choiceIndex: index });
        };

        return (
          <Choice
            onClick={clickHandler}
            key={index}
            choice={choice}
            selected={questionChoice === index}
          />
        );
      })}
    </div>
  );
};

export default function Quiz() {
  const [points, setPoints] = React.useState<number>(0);
  const [choices, setChoices] = React.useState<number[]>([]);
  const [showAnswers, setShowAnswers] = React.useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const nQuestions = QUIZ_DATA?.questions.length;
  const handleChoiceClick = ({ questionIndex, choiceIndex }) => {
    const newChoices = [...choices];
    newChoices[questionIndex] = choiceIndex;
    setChoices(newChoices);
  };

  function submit() {
    let points = 0;

    QUIZ_DATA?.questions?.forEach((question, index) => {
      if (question.correctAnswer === choices[index]) points++;
    });
    setPoints(points);
    setShowAnswers(true);
  }

  return (
    <main className='min-h-screen w-full bg-slate-800 pt-4 font-hyperlegible'>
      {/* <div className="fixed bottom-0 p-4 w-40 h-auto bg-white ">
        JSON DATA: <br></br>
        {JSON.stringify(choices, null, 2)}
      </div> */}
      <div className='p-4'>
        <h2 className='mb-4 text-white'>
          Question {currentQuestion + 1} of {nQuestions}
        </h2>
        <AnimatedBorderContainer>
          <Question
            onClick={handleChoiceClick}
            questionIndex={currentQuestion}
            key={currentQuestion}
            questionChoice={choices[currentQuestion]}
            question={QUIZ_DATA.questions[currentQuestion]}
          />
        </AnimatedBorderContainer>
        <div className='flex w-full justify-center'>
          <div className='flex-grow'>
            {currentQuestion !== 0 && (
              <button
                className='mt-4 mr-2 rounded bg-slate-200 py-2 px-4'
                onClick={() => setCurrentQuestion((prev) => prev - 1)}
                type='button'
              >
                Previous
              </button>
            )}

            {currentQuestion + 1 < nQuestions && (
              <button
                className='mr-2 mt-4 rounded bg-slate-200 py-2 px-4'
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                type='button'
              >
                Next
              </button>
            )}
          </div>

          <button
            className='mr-2 mt-4 rounded bg-slate-200 py-2 px-4'
            onClick={() => submit()}
            type='button'
          >
            Rätta
          </button>
        </div>
      </div>
      {showAnswers && (
        <div
          className='curspor-pointer absolute top-1/2 z-20 w-full bg-yellow-400 text-center text-2xl'
          onClick={() => setShowAnswers(false)}
        >
          {points.toString()} Correct Answers
        </div>
      )}
    </main>
  );
}

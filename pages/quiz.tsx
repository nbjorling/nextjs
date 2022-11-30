import * as React from "react";

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
  title: "Quiz Title",
  description: "Quiz description goes here for as good as I know",
  questions: [
    {
      question: "Vad är 1+1?",
      choices: [
        { text: "2", correct: true },
        { text: "3", correct: false },
        { text: "4", correct: false },
      ],
      correctAnswer: 0,
    },
    {
      question: "Rätt svar borde vara tre?",
      choices: [
        { text: "Ett", correct: false },
        { text: "Två", correct: false },
        { text: "Tre", correct: true },
      ],
      correctAnswer: 2,
    },
  ],
};

const Choice: React.FC<ChoiceElementProps> = ({ choice, selected, onClick }) => {
  const bgStyle = selected && "border-yellow-400";
  const styles = "border-2 p-2 my-4 cursor-pointer bg-slate-500  hover:bg-slate-400";
  return (
    <div className={[bgStyle, styles].join(" ")} onClick={onClick}>
      <div className="flex justify-between">
        <p>{choice.text}</p>
        {selected && <p className="text-yellow-400">Selected</p>}
      </div>
    </div>
  );
};

const Question: React.FC<QuestionComponentProps> = ({ question, onClick, questionChoice, questionIndex }) => {
  return (
    <div className="text-white bg-slate-600 m-4 p-4 rounded-lg">
      <div>
        {questionIndex + 1}. {question?.question}
      </div>
      {question?.choices?.map((choice, index) => {
        const clickHandler = () => {
          onClick({ questionIndex, choiceIndex: index });
        };

        return <Choice onClick={clickHandler} key={index} choice={choice} selected={questionChoice === index} />;
      })}
    </div>
  );
};

export default function Quiz() {
  const [points, setPoints] = React.useState<number>(0);
  const [choices, setChoices] = React.useState<number[]>([]);
  const [showAnswers, setShowAnswers] = React.useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);

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
    <main className="w-full min-h-screen bg-slate-800 pt-4 font-hyperlegible">
      <div className="fixed bottom-0 p-4 w-40 h-auto bg-white ">
        JSON DATA: <br></br>
        {JSON.stringify(choices, null, 2)}
      </div>
      <Question
        onClick={handleChoiceClick}
        questionIndex={currentQuestion}
        key={currentQuestion}
        questionChoice={choices[currentQuestion]}
        question={QUIZ_DATA.questions[currentQuestion]}
      />
      <div className="flex w-full justify-center">
        <button
          className="bg-slate-200 py-2 px-4 mt-4 mr-2 rounded"
          onClick={() => setCurrentQuestion((prev) => prev - 1)}
        >
          Previous
        </button>
        <button className="bg-slate-200 py-2 px-4 mr-2 mt-4 rounded" onClick={() => submit()}>
          Rätta
        </button>
        <button
          className="bg-slate-200 py-2 px-4 mr-2 mt-4 rounded"
          onClick={() => setCurrentQuestion((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
      {showAnswers && <div className="text-2xl p-2 m-8 bg-yellow-400">{points.toString()} Correct Answers</div>}
    </main>
  );
}

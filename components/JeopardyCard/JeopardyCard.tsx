import * as React from "react";

type JeopardyCardProps = { caption: string, question?: string };

const JeopardyCard: React.FC<JeopardyCardProps> = ({ caption, question }) => {
  const [showQuestion, setShowQuestion] = React.useState(false);

  const flipCard = () => {
    question && setShowQuestion(!showQuestion);
  };

  return (
    <div
      className="flex m-1 h-32 w-48 bg-transparent [perspective:1000px]"
      onClick={flipCard}
    >
      <div
        className={`relative transition-all w-full h-full duration-500 [transform-style:preserve-3d] ${
          showQuestion && "[transform:rotateY(180deg)]"
        }`}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="bg-blue-500 h-full w-full flex justify-center items-center flex-col">
            <p className="text-yellow-300 text-4xl text-center">{caption}</p>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="bg-blue-500 h-full w-full flex justify-center items-center flex-col">
            <p className="text-yellow-300 text-xl text-center">{question}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeopardyCard;

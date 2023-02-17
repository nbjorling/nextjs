import * as React from "react";
import JeopardyCard from "../components/JeopardyCard/JeopardyCard";
import categories from "../public/jeopardy.json";

const Jeopardy: React.FC = () => {
  return (
    <div className="bg-black flex flex-row h-full w-full">
      {categories.map((category) => (
        <div className="flex-col">
          <JeopardyCard caption={category.name} />
          {category.questions.map((question, index) => {
            const caption = `${(index + 1) * 100}`;
            return <JeopardyCard caption={caption} question={question} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Jeopardy;

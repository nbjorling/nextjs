import * as React from 'react';
import FlippableCard from '../components/FlippableCard/FlippableCard';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import categories from '../public/jeopardy.json';

const Jeopardy: React.FC = () => {
  return (
    <div className='flex h-full w-full flex-row bg-black'>
      {categories.map((category) => (
        <div key={category.name} className='flex-col'>
          <FlippableCard frontText={category.name} />
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
      ))}
      <ScoreBoard />
    </div>
  );
};

export default Jeopardy;

import * as React from 'react';
import JeopardyCard from '../components/JeopardyCard/JeopardyCard';
import categories from '../public/jeopardy.json';

const Jeopardy: React.FC = () => {
  return (
    <div className='flex h-full w-full flex-row bg-black'>
      {categories.map((category) => (
        <div key={category.name} className='flex-col'>
          <JeopardyCard caption={category.name} />
          {category.questions.map((question, index) => {
            const caption = `${(index + 1) * 100}`;
            return (
              <JeopardyCard
                key={question}
                caption={caption}
                question={question}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Jeopardy;

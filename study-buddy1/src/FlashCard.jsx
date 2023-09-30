import { useState } from 'react';

function FlashCard(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flash-card" onClick={handleCardClick}>
      <div className="flash-card-question">{props.question}</div>
      {showAnswer && <div className="flash-card-answer">{props.answer}</div>}
    </div>
  );
}

export default FlashCard;
import React from 'react';

function Question({currentQuestion, options, handleAnswer, currentQuestionIndex,score, totalQuestion}) {
  return (
    <div className='container d-flex- align-content-center justify-content-center mt-5'>
      <div className="text-center card-header m-3">
        <h3 className="mb-0">React Quiz App</h3>
      </div>
<div className='card-body'>
<div className="d-flex justify-content-between align-items-center mb-3">
        <span className="badge bg-secondary">Question {currentQuestionIndex} of {totalQuestion}</span>
        <span className="badge bg-success">Score: {score}</span>
      </div>

 <div className="progress mb-4" style={{ height: "6px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "30%" }}
        ></div>
      </div>

      <h3 className='text-center mb-4'>{currentQuestion.question.text}</h3>
      <div className="d-grid gap-2">
         {options.map((option, index) => (
        <button
          className='btn btn-outline-primary'
          key={index}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}
      </div>
    </div>
    </div>
  );
}

export default Question;

import React from 'react';

function Review({ questions, userAnswers, handleRestart, handleGoHome }) {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Review Your Answers</h3>

      {questions.map((question, index) => {
        const isCorrect = userAnswers[index] === question.correctAnswer;

        return (
          <div
            className={`card mb-3 border ${isCorrect ? "border-success" : "border-danger"}`}
            key={index}
          >
            <div className="card-header d-flex justify-content-between align-items-center">
              <span>Question {index + 1}</span>
              <span className={`badge ${isCorrect ? "bg-success" : "bg-danger"}`}>
                {isCorrect ? "Correct" : "Incorrect"}
              </span>
            </div>
            <div className="card-body">
              <p className="card-text fw-bold">{question.question.text}</p>
              <p className="card-text">
                Your Answer:{" "}
                <span className={isCorrect ? "text-success" : "text-danger"}>
                  {userAnswers[index] ?? "Not answered"}
                </span>
              </p>
              {!isCorrect && (
                <p className="card-text">
                  Correct Answer: <span className="text-success">{question.correctAnswer}</span>
                </p>
              )}
            </div>
          </div>
        );
      })}
      <div className="container text-center d-flex justify-content-around">
         <button className="btn btn-primary" onClick={handleRestart}>Restart</button>
         <button className="btn btn-primary" onClick={handleGoHome}>Go Home</button>
      </div>
    </div>
  );
}

export default Review;
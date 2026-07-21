import React from 'react';

function Question({
  currentQuestion,
  options,
  handleAnswer,
  currentQuestionIndex,
  score,
  totalQuestion,
  selectedAnswer,
  answerSubmitted,
  timeLeft
}) {
  return (
    <div className="container d-flex align-content-center justify-content-center mt-5">
      <div className="card shadow" style={{ width: "40rem" }}>
        <div className="text-center card-header">
          <h3 className="mb-0">React Quiz App</h3>
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="badge bg-secondary">
              Question {currentQuestionIndex + 1} of {totalQuestion}
            </span>

            <span className="badge bg-warning text-dark">
              {timeLeft}s
            </span>

            <span className="badge bg-success">
              Score: {score}
            </span>
          </div>

          <div className="progress mb-4" style={{ height: "6px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${((currentQuestionIndex + 1) / totalQuestion) * 100}%`,
              }}
            ></div>
          </div>

          <h3 className="text-center mb-4">
            {currentQuestion.question.text}
          </h3>

          <div className="d-grid gap-2">
            {options.map((option, index) => (
              <button
               className={`btn ${answerSubmitted
                                    ? option === currentQuestion.correctAnswer
                                      ? "btn-success"
                                      : option === selectedAnswer
                                      ? "btn-danger"
                                      : "btn-outline-secondary"
                                    : "btn-outline-primary"
                                }`}
                key={index}
                disabled={answerSubmitted}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
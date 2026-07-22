import React from 'react';

function StartScreen({category,setCategory,questionCount,setQuestionCount,handleStartQuiz}) {
  return (
    <div className="card w-50 mx-auto mt-5 text-center">
      <div className="card-body">
        <h1 className="card-title my-3">Welcome</h1>

        <div className="mb-3">
          <select className="form-select" defaultValue="" value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option value="" disabled>Select Category</option>
            <option value="general">General Knowledge</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        <div className="mb-3">
          <select className="form-select" defaultValue="" onChange={(e)=> setQuestionCount(e.target.value)}>
            <option value="" disabled>Select Number of Questions</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <a href="#" className="btn btn-primary" onClick={handleStartQuiz}>Start Quiz</a>
      </div>
    </div>
  );
}

export default StartScreen;
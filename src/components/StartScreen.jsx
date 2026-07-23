import React from 'react';

function StartScreen({category,setCategory,questionCount,setQuestionCount,handleStartQuiz,setDifficultyLevel,difficulty}) {
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
            <option value="math">Math</option>
            <option value="geography">Geography</option>
            <option value="food_and_drink">Food & Drink</option>
            <option value="music">Music</option>
             <option value="sport_and_leisure">Sport & Leisure</option>
            <option value="arts_and_literature">Arts & Literature</option>
          </select>
        </div>

        <div className="mb-3">
          <select className="form-select" defaultValue="" onChange={(e)=> setQuestionCount(e.target.value)}>
            <option value="" disabled>Select Number of Questions</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <div className="mb-3">
          <select className="form-select" defaultValue="" onChange={(e)=> setDifficultyLevel(e.target.value)}>
            <option value="" disabled>Select the difficulty level</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button className="btn btn-primary" onClick={handleStartQuiz} disabled={!category || !difficulty || !questionCount}>Start Quiz</button>
      </div>
    </div>
  );
}

export default StartScreen;
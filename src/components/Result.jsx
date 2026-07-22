import React from 'react';

function Result({score, totalQuestion, handleRestart, setShowReview, handleGoHome}) {

  const persentage = Math.round((score/totalQuestion)*100);
  const incorrect = totalQuestion-score;

  let message = "";
  if(persentage>=80){
    message = "Excellent!";
  } else if(persentage>=60){
    message="Good";
  }else if(persentage>=40){
    message="keep practicing";
  }else{
    message="Don't Give Up";
  }

  return (
    // <div className="container m-5">
    //     <h1 className='text-center'>Quiz Finished</h1>
    //     <h3 className='text-center'>Your Score: {score} / {totalQuestion}</h3>
    // </div>

    
    <div className="card text-center mt-5 mx-auto" style={{ width: "40rem" }}>
  <div className="card-header">
    Quiz Finished
  </div>
  <div className="card-body " >
    <h5 className="card-title">Result</h5>
    <p className="card-text">Your Score: {score} / {totalQuestion}</p>
    <p className="card-text">Incorrect: {incorrect}</p>
    <p className="card-text">Your Percentage: {persentage}%</p>
   <div className="container">
     <button className="btn btn-primary" onClick={handleRestart}>Restart</button>
    <button className="btn btn-primary m-4" onClick={()=>setShowReview(true)}>Review Answers</button>
    <button className="btn btn-primary m-4" onClick={handleGoHome}>Go Home</button>
   </div>
  </div>
  <div className="card-footer text-body-secondary">
    {message}
  </div>
</div>
  );
}

export default Result;
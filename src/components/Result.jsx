import React from 'react';

function Result({score, totalQuestion, handleRestart}) {
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
    <a href="#" className="btn btn-primary" onClick={handleRestart}>Restart</a>
  </div>
  <div className="card-footer text-body-secondary">
    Highest Score:......
  </div>
</div>
  );
}

export default Result;
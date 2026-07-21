import React from 'react';

function Result({score, totalQuestion}) {
  return (
    <div className="container m-5">
        <h1 className='text-center'>Quiz Finished</h1>
        <h3 className='text-center'>Your Score: {score} / {totalQuestion}</h3>
    </div>
    
  );
}

export default Result;
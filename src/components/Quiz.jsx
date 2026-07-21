import { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";
import Loader from "./Loader";
function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchQuestions = async () => {
    setLoading(true);

    try{
       const response = await fetch(
      // "https://opentdb.com/api.php?amount=10&type=multiple"
     "https://the-trivia-api.com/v2/questions?limit=10"
    //  "https://opentdb.com/api.php?amount=10&type=multiple"
    );

    if(!response.ok){
      throw new Error(`request failed with status ${response.status}`)
    }

     const data = await response.json();
      // setQuestions(data.results);
      setQuestions(data);



    } catch(err){
      setError(err.message);
      setQuestions([]);

    }finally{
      setLoading(false);
    }
    
  };
  

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (loading) {
    return <Loader/>;
  }

const handleAnswer = (selectedAnswer) => {
  if(selectedAnswer === currentQuestion.correctAnswer){
    console.log(selectedAnswer);
    setScore(score+1);
  }
  // setCurrentQuestionIndex(currentQuestionIndex+1);
  const nextQuestion = currentQuestionIndex+1;
  if(nextQuestion < questions.length ){
    setCurrentQuestionIndex(nextQuestion);
  }else{
    setShowScore(true);
  }
}


// one problem is to alwas first option is correct now shuffles the option 
  const currentQuestion = questions[currentQuestionIndex];
  const options = [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers,].sort(()=>Math.random()-0.5);

if(showScore){
  return(
     <Result score={score} totalQuestion={questions.length}/>
  )
}


  return (
    <div>
      {/* <h2 className="text-center">Question {currentQuestionIndex+1} of {questions.length}</h2>
      <p>Score: {score}</p> */}
      {/* map create automatically one button for each option */}
      {/* <h3>{currentQuestion.question.text}</h3>
      {options.map((option, index)=>(<button key={index} onClick={()=>handleAnswer(option)}>{option}</button>))} */}
      {/* react uses the key to udentify the each item in a list like roll number of each student in class react know exactly which element is it */}
      <Question currentQuestion={currentQuestion} options={options} handleAnswer={handleAnswer} currentQuestionIndex={currentQuestionIndex} score={score} totalQuestion={questions.length}/>
      {/* resut component */}
     
    </div>
     
  );
}

export default Quiz;
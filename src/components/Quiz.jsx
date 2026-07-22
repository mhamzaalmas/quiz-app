import { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";
import Loader from "./Loader";
import Review from "./Review";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [options, setOptions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showReview, setShowReview] = useState(false);

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
  
const handleNextQuestion = ()=>{
  // setCurrentQuestionIndex(currentQuestionIndex+1);
  const nextQuestion = currentQuestionIndex+1;
  if(nextQuestion < questions.length ){
    setCurrentQuestionIndex(nextQuestion);
    setSelectedAnswer(null);
    setAnswerSubmitted(false);
    setTimeLeft(15);
  }else{
    setShowScore(true);
  }
}

const handleAnswer = (selectedAnswer) => {
  setSelectedAnswer(selectedAnswer);
  setUserAnswers([...userAnswers, selectedAnswer]);
  setAnswerSubmitted(true)
  if(selectedAnswer === currentQuestion.correctAnswer){
    console.log(selectedAnswer);
    // setScore(score+1);
    setScore((prevScore) => prevScore + 1);
  }
  // setCurrentQuestionIndex(currentQuestionIndex+1);
  // const nextQuestion = currentQuestionIndex+1;
  // if(nextQuestion < questions.length ){
  //   setCurrentQuestionIndex(nextQuestion);
  // }else{
  //   setShowScore(true);
  // }
}

const handleTimeOut = ()=>{
  setSelectedAnswer(null);
  setAnswerSubmitted(true);
}


  useEffect(() => {
    fetchQuestions();
  }, []);

const handleRestart = async()=>{
  setCurrentQuestionIndex(0);
  setScore(0);
  setShowScore(false);
  setAnswerSubmitted(false);
  setSelectedAnswer(null);
  setShowReview(false);
  setUserAnswers([]);

  await fetchQuestions();
}



 useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prevTime) => {
      if (prevTime <= 1) {
        clearInterval(timer);
        handleTimeOut();
        return 0;
      }

      return prevTime - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [currentQuestionIndex, answerSubmitted]);





  const currentQuestion = questions[currentQuestionIndex];
  useEffect(()=>{
    if(!currentQuestion) return;
    const shuffledOptions = [
      currentQuestion.correctAnswer,
    ...currentQuestion.incorrectAnswers,
      ].sort(() => Math.random() - 0.5);

      setOptions(shuffledOptions);
    },[currentQuestionIndex,questions]);

  if (loading) {
    return <Loader/>;
  }








// one problem is to alwas first option is correct now shuffles the option 
  // const currentQuestion = questions[currentQuestionIndex];
  // const options = [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers,].sort(()=>Math.random()-0.5);
if(showReview){
  return(
    <Review questions={questions} userAnswers={userAnswers} handleRestart={handleRestart}/>
  );
}

if(showScore){
  return(
     <Result score={score} totalQuestion={questions.length} handleRestart={handleRestart} setShowReview={setShowReview}/>
  )
}



// if(answerSubmitted){
//   return(
//     <button className="btn btn-primary btn-outline-primary" onClick={handleNextQuestion}>Next Question</button>
//   )
// }

  return (
    <div>
      {/* <h2 className="text-center">Question {currentQuestionIndex+1} of {questions.length}</h2>
      <p>Score: {score}</p> */}
      {/* map create automatically one button for each option */}
      {/* <h3>{currentQuestion.question.text}</h3>
      {options.map((option, index)=>(<button key={index} onClick={()=>handleAnswer(option)}>{option}</button>))} */}
      {/* react uses the key to udentify the each item in a list like roll number of each student in class react know exactly which element is it */}
      <Question currentQuestion={currentQuestion} options={options} handleAnswer={handleAnswer} currentQuestionIndex={currentQuestionIndex} score={score} totalQuestion={questions.length} selectedAnswer={selectedAnswer} answerSubmitted={answerSubmitted} timeLeft={timeLeft}/>
      

      <div className="container d-flex align-content-center justify-content-center gap-2 mt-4 text-center" style={{ width: "40rem" }}>{answerSubmitted && (<button className="btn btn-primary" onClick={handleNextQuestion}>Next Question</button>)}</div> 

  </div>
      
  );
}

export default Quiz;
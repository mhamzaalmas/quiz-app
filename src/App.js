
import {useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
function App() {
// parent quiz own the data child question only display it
  // when fetch the questions from api the quiz components will hold them in the state
//  const [questions, setQuestions] = useState([]);
//  it will send the current question to the question components
//  const [currentQuestion, setCurrentQuestion] = useState(0);
//  const [score, setScore] = useState(0);
//  const [loading, setLoading] = useState(true);
  return (
    <div>


      <Navbar/>
      <Quiz/>
      
      
    </div>

  );
}

export default App;

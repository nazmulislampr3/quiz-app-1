import { createContext, ReactNode, useContext, useState } from "react";
import quizes from "../quizes";
type Func1 = (index?: number) => void;
type SubmitAnswer = (quizIndex: number, ansIndex: number) => void;

const QuizContext = createContext<{
  answers: number[];
  currentQuiz: number;
  submitAnswer: SubmitAnswer;
  nextQuiz: Func1;
  prevQuiz: Func1;
  result: boolean;
  reset: Func1;
  submitQuiz: Func1;
  score: number;
} | null>(null);

const QuizContextProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);

  const score = answers.reduce((acc, currentValue, index) => {
    const correctAns = quizes[index].ans === currentValue;
    return acc + (correctAns ? 1 : 0);
  }, 0);

  const submitAnswer: SubmitAnswer = (quizIndex, ansIndex) => {
    if (
      !answers[quizIndex] &&
      quizIndex <= quizes.length - 1 &&
      quizIndex === answers.length
    ) {
      const ans = [...answers];
      ans[currentQuiz] = ansIndex;
      setAnswers(ans);
    }
  };

  const nextQuiz: Func1 = () => {
    if (currentQuiz < quizes.length - 1) {
      setCurrentQuiz((prev) => Math.min(prev + 1, quizes.length - 1));
    }
  };

  const prevQuiz: Func1 = () => {
    if (currentQuiz >= 1) {
      setCurrentQuiz((prev) => prev - 1);
    }
  };

  const reset: Func1 = () => {
    setAnswers([]);
    setCurrentQuiz(0);
    setResult(false);
  };

  const submitQuiz = () => setResult(true);

  return (
    <QuizContext.Provider
      value={{
        answers,
        currentQuiz,
        submitAnswer,
        nextQuiz,
        result,
        reset,
        prevQuiz,
        submitQuiz,
        score,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;

export const useQuizContext = () => useContext(QuizContext);

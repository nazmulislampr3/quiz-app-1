import { useQuizContext } from "../../context/QuizContext";
import quizes from "../../quizes";

const Quiz = () => {
  const {
    currentQuiz,
    answers,
    submitAnswer,
    nextQuiz: gotToNextQuiz,
    prevQuiz: goToPrevQuiz,
    submitQuiz,
  } = useQuizContext()!;
  const { question, choices, ans } = quizes[currentQuiz];
  const selectedAnswer = answers[currentQuiz] >= 0;
  const nextQuiz = answers[currentQuiz] >= 0 && quizes.length - 1 > currentQuiz;
  const prevQuiz = currentQuiz > 0;
  const lastQuiz = currentQuiz === quizes.length - 1;

  let sNo = `${currentQuiz + 1}`;
  sNo = sNo.length === 1 ? `0${sNo}` : sNo;
  return (
    <div className="w-full">
      <div className="h-full flex flex-col justify-center">
        <div className="flex gap-3 justify-between">
          <h2 className="text-xl md:text-2xl font-bold">
            {sNo}. {question}
          </h2>
          <span className="font-semibold">
            {currentQuiz + 1}/{quizes.length}
          </span>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {choices.map((choice, index) => {
            const letter =
              index === 0 ? "a" : index === 1 ? "b" : index === 2 ? "c" : "d";

            const selected = answers[currentQuiz] === index;
            const correct = index === ans;
            const selectedWrong = selected && !correct;

            return (
              <div
                key={index}
                className={`text-xl font-semibold  px-4 py-3 md:px-6 md:py-7 cursor-pointer flex gap-3 ${
                  selectedAnswer
                    ? `${
                        selectedWrong
                          ? "bg-red-300 text-slate-800"
                          : correct
                          ? "bg-green-500 text-slate-200"
                          : "bg-teal-400 text-slate-800"
                      }`
                    : "bg-teal-400 text-slate-800"
                }`}
                onClick={() => submitAnswer(currentQuiz, index)}
              >
                <span>
                  {letter}
                  {")"}
                </span>
                <span>{choice}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col justify-center">
          {lastQuiz ? (
            <button
              disabled={!selectedAnswer}
              className="bg-green-500 px-6 py-2 mx-auto text-slate-200 font-bold text-lg disabled:opacity-70"
              onClick={() => submitQuiz()}
            >
              Submit
            </button>
          ) : null}
          <div className="flex justify-around mt-10">
            <button
              disabled={!prevQuiz}
              className={`p-3 bg-gray-500 size-4 box-content disabled:opacity-70`}
              onClick={() => goToPrevQuiz()}
            >
              <img className="invert" src="/images/left-arrow.png" />
            </button>
            <button
              disabled={!nextQuiz}
              className={`p-3 bg-gray-500 size-4 box-content disabled:opacity-70`}
              onClick={() => gotToNextQuiz(currentQuiz + 1)}
            >
              <img className="invert" src="/images/right-arrow.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

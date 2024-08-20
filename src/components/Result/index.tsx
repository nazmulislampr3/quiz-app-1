import { useQuizContext } from "../../context/QuizContext";
import quizes from "../../quizes";

const Result = () => {
  const { score, answers, reset } = useQuizContext()!;
  const letters = ["a", "b", "c", "d"];
  return (
    <div className="h-full w-full px-6 md:px-10">
      <div className="flex flex-col items-center">
        <div className="text-green-500 font-bold text-3xl md:text-4xl">
          Congratulations!
        </div>
        <div className="font-bold text-2xl text-slate-800 mt-3 md:mt-5">
          Score: {score}/{quizes.length}
        </div>
        <div className="mt-8 flex flex-col gap-5">
          {quizes.map(({ question, ans, choices }, index) => {
            const selected = choices[answers[index]];

            const correctAns = choices[ans];
            const selectedCorrect = ans === answers[index];

            return (
              <div>
                <div className="flex items-end justify-between">
                  <h3 className="text-xl md:text-3xl font-bold text-slate-800">
                    {question}
                  </h3>
                  <img
                    className="size-4 md:size-5"
                    src={`/images/${selectedCorrect ? "check" : "cross"}.png`}
                  />
                </div>
                <div>
                  <div
                    className={`text-sm md:text-lg font-semibold text-slate-800 px-3 py-2 my-3 ${
                      selectedCorrect
                        ? "bg-green-400"
                        : "bg-red-300 text-slate-500"
                    }`}
                  >
                    <span>{letters[answers[index]]})</span>{" "}
                    <span>{selected}</span>
                  </div>
                </div>
                {!selectedCorrect ? (
                  <div>
                    <div
                      className={`text-sm md:text-lg font-semibold text-slate-800 px-3 py-2 my-3 bg-green-400`}
                    >
                      <span>{letters[ans]}) </span>
                      <span>{correctAns}</span>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <button
            className="px-6 py-2 bg-green-500 font-bold text-slate-200"
            onClick={() => reset()}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;

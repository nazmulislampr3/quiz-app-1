import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { useQuizContext } from "./context/QuizContext";

function App() {
  const { result } = useQuizContext()!;
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom right, #7C93C3, #1E2A5E)",
      }}
    >
      <div className="max-w-2xl w-full min-h-[80vh] max-h-[90vh] bg-slate-300 py-8 px-8 md:px-12 shadow-gray-700 shadow-lg flex justify-center overflow-y-auto">
        {result ? <Result /> : <Quiz />}
      </div>
    </div>
  );
}

export default App;

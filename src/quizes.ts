import { Quiz } from "./types";

const quizes: Quiz[] = [
  {
    question: "What is React?",
    choices: [
      "A JavaScript library for building user interfaces.",
      "A programming language.",
      "A CSS framework.",
      "A database management system.",
    ],
    ans: 0,
  },
  {
    question: "Which of the following is used to create a React component?",
    choices: [
      "let or const",
      "import or export",
      "function or class",
      "for or while",
    ],
    ans: 2,
  },
  {
    question: "What is the virtual DOM in React?",
    choices: [
      " A JavaScript object representing the structure of a webpage.",
      "A CSS file used for styling React components.",
      "The real DOM that React interacts with directly.",
      "A copy of the real DOM that is kept in memory.",
    ],
    ans: 3,
  },
  {
    question: "Which method is used to update the state in a React component?",
    choices: ["updateState()", "changeState()", "setState()", "modifyState()"],
    ans: 2,
  },

  {
    question: "What does JSX stand for?",
    choices: [
      "JavaScript Extension",
      "JavaScript and XSLT",
      "JavaScript XML",
      "JavaScript Syntax Extension",
    ],
    ans: 2,
  },
  {
    question: "What is the purpose of `useEffect` in React?",
    choices: [
      "To handle form validation.",
      "To perform side effects in function components.",
      "To manage the state of the component.",
      "To apply CSS styles to components.",
    ],
    ans: 1,
  },
  {
    question:
      "How do you pass data from a parent component to a child component in React?",
    choices: [
      "By using props.",
      "By using state.",
      "By using context.",
      "By using refs.",
    ],
    ans: 0,
  },
  {
    question:
      "Which of the following hooks is used to manage state in a functional component?",
    choices: ["`useEffect`", "`useRef`", "`useState`", "`useContext`"],
    ans: 2,
  },
  {
    question:
      "What is the correct way to conditionally render a component in React?",
    choices: [
      "{isLoggedIn && <Dashboard />}",
      "{isLoggedIn ? <Dashboard /> : null}",
      "{isLoggedIn ? <Dashboard /> : <Login />}",
      "All of the above.",
    ],
    ans: 3,
  },
  {
    question: "What is a higher-order component (HOC) in React?",
    choices: [
      "A component that manages multiple states.",
      "A component that handles user authentication.",
      "A built-in React method for handling arrays.",
      "A function that takes a component and returns a new component.",
    ],
    ans: 3,
  },
];

export default quizes;

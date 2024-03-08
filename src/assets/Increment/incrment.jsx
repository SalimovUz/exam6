import { useState } from "react";

export const [questions, setQuestions] = useState("hidden");
export const [question, setQuestion] = useState("");
export const incrment = () => {
  setQuestion("hidden");
  setQuestions("");
};


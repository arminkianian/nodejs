import { useRef, useState, type FormEvent } from "react";

interface Props {
  onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({ onAddGoal }: Props) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input ref={goal} id="goal" type="text" />
      </p>

      <p>
        <label htmlFor="summary">Short summary:</label>
        <input ref={summary} id="summary" type="text" />
      </p>

      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;

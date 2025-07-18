import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

interface Props {
  goals: CGoal[];
  onDelete: (goalId: number) => void;
}

const CourseGoalList = ({ goals, onDelete }: Props) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} onDelete={() => onDelete(goal.id)}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;

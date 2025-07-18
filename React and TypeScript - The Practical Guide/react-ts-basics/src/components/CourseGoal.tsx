import type React from "react";
import type { PropsWithChildren, ReactNode } from "react";

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
  title: string;
  onDelete: () => void;
}>;

const CourseGoal: React.FC<CourseGoalProps> = ({
  title,
  children,
  onDelete,
}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </article>
  );
};

export default CourseGoal;

import CourseGoalItem from '@/components/CourseGoals/CourseGoalItem/CourseGoalItem';
import '@/components/CourseGoals/CourseGoalList/CourseGoalList.css';
import { Goal } from '@/components/CourseGoals/types';

function CourseGoalList(props: { items: Goal[]; onDeleteItem: Function }) {
  return (
    <ul className="goal-list">
      {props.items.map((goal: Goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
}

export default CourseGoalList;

import CourseGoalItem from '@/components/CourseGoals/CourseGoalItem/CourseGoalItem';
import styled from 'styled-components';
// import '@/components/CourseGoals/CourseGoalList/CourseGoalList.css';
import { Goal } from '@/components/CourseGoals/types';

const GoalList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

function CourseGoalList(props: { items: Goal[]; onDeleteItem: Function }) {
  return (
    <GoalList>
      {props.items.map((goal: Goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </GoalList>
  );
}

export default CourseGoalList;

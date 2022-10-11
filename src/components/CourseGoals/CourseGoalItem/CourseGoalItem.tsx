import styled from 'styled-components';
// import '@/components/CourseGoals/CourseGoalItem/CourseGoalItem.css';

const GoalItem = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`;

function CourseGoalItem(props: {
  id: string;
  onDelete: Function;
  children: React.ReactNode;
}) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <GoalItem onClick={deleteHandler}>
      {props.children}
    </GoalItem>
  );
}

export default CourseGoalItem;

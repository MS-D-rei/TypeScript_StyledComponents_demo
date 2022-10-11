import '@/components/CourseGoals/CourseGoalItem/CourseGoalItem.css';

function CourseGoalItem(props: {
  id: string;
  onDelete: Function;
  children: React.ReactNode;
}) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
}

export default CourseGoalItem;

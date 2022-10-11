import React, { useState } from 'react';
import Button from '@/components/UI/Button';
import styled from 'styled-components';
import '@/components/CourseGoals/CourseInput/CourseInput.css';

interface FormControlProps {
  valid: boolean;
}
// How to use custom props on Styled Components
// https://styled-components.com/docs/api#typescript
// https://zenn.dev/nekoniki/articles/f8600d1ab7d908
const FormControl = styled.div<FormControlProps>`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.valid ? 'black' : 'red')}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.valid ? '#ccc' : 'red')};
    background: ${(props) => (props.valid ? 'transparent' : '#ffd7d7')}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

function CourseInput(props: { onAddGoal: Function }) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* dynamic CSS */}
      {/* <div className={`form-control ${isValid ? '' : 'invalid'}`}> */}
      <FormControl valid={isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* </div> */}
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;

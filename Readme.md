## styled-components

### Normal CSS problems and styled-components solutions.
1. CSS classes apply globally, not scoped.
=> styled-components makes each component's CSS scoped.
2. Same class name is easily duplicated.
=> styled-components generates unique random class names when rendered.
3. Write CSS class multiple times to make same effect on different html file.
=> styled-components manages CSS with component basis. Using the component that has the effect multiple times to avoid this problem.
4. CSS can't use valiable.
=> styled-components can use JS(TS) syntax and also props when needed.

### Basic usage
1. Make custom component to contain CSS needed to be scoped. (FormControl in example below)
2. Replace original html element like div to the custom component.
3. When use props in TypeScript, need to make interface for it. (FormControlProps in below)
```
import styled from 'styled-components';
interface FormControlProps {
  valid: boolean;
}

const FormControl = styled.div<FormControlProps>`
  margin: 0.5rem 0;

  & input {
  width: 100%;
  border: 1px solid ${(props) => (props.valid ? '#ccc' : 'red')};
  background: ${(props) => (props.valid ? 'transparent' : '#ffd7d7')}
  }

  & input:focus {
    background: #fad0ec;
  }

  &.invalid label {
  color: red;
  }
`;

function CourseInput(props: { onAddGoal: Function }) {
  /* ... */
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl valid={isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  )
}
export default CourseInput;
```
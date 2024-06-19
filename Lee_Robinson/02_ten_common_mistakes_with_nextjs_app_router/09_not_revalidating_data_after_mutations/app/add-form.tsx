import { useFormState } from "react-dom";

export default function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="todo"> Enter Task</label>
      <input type="text" id="todo" name="todo" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}

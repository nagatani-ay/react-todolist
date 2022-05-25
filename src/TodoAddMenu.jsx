export function TodoAddMenu(props) {
  const setTodos = props.setTodos;
  const generateCode = props.generateCode;
  const setTarget = props.setTarget;
  const targetText = props.targetText;

  function setTargetText(text) {
    setTarget(text);
  }
  return (
    <div>
      <button
        onClick={() => {
          setTodos((todos) => [
            ...todos,
            { code: generateCode(), text: targetText, status: false },
          ]);
          setTarget('');
        }}
      >
        Add
      </button>
      <input
        type="text"
        value={targetText}
        onChange={(event) => {
          setTargetText(event.target.value);
        }}
        placeholder="Please input here"
      />
    </div>
  );
}

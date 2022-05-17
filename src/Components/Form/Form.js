const Form = ({ onChange, onSubmit, ...props }) => {
  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    onChange(name, value);
  };

  return (
    <form className="app__form" onSubmit={onSubmit}>
      <label htmlFor="">New Note</label>
      <textarea
        name="content"
        id="new"
        cols="50"
        rows="7"
        onChange={handleChange}
        value={props.content}
        required
      ></textarea>
      <button type="submit">➤</button>
    </form>
  );
};

export default Form;

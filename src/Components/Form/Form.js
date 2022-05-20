import "./Form.scss";
import PropTypes from "prop-types";

const Form = ({ onChange, onSubmit, ...props }) => {
  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    onChange(name, value);
  };

  return (
    <form className="app__form" onSubmit={onSubmit}>
      <label className="form__label">New Note</label>
      <textarea
        className="form__input"
        name="content"
        id="new"
        cols="50"
        rows="7"
        onChange={handleChange}
        value={props.content}
        required
      ></textarea>
      <button className="form__submit" type="submit">
        ➤
      </button>
    </form>
  );
};

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default Form;

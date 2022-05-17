const Card = ({ ...props }) => {
  return (
    <div className="card">
      <p className="card__text">{props.content}</p>
      <button className="card__delete" type="submit">
        ❌
      </button>
    </div>
  );
};

export default Card;

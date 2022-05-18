const Card = ({ onDelete, ...props }) => {
  const handleDelete = (target) => {
    onDelete(target, props.id);
  };

  return (
    <div className="card">
      <p className="card__text">{props.content}</p>
      <button className="card__delete" type="submit" onClick={handleDelete}>
        ❌
      </button>
    </div>
  );
};

export default Card;

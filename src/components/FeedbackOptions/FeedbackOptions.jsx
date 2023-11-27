export function FeedbackOptions({ handleClick }) {
  return (
    <div>
      <button name="good" type="button" onClick={handleClick}>
        Goog
      </button>
      <button name="neutral" type="button" onClick={handleClick}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={handleClick}>
        Bad
      </button>
    </div>
  );
}

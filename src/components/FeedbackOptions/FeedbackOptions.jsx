import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ handleClick }) {
  return (
    <div>
      <Button
        name="good"
        type="button"
        className="btn btn-primary"
        onClick={handleClick}
      >
        Goog
      </Button>
      <Button
        name="neutral"
        type="button"
        className="btn btn-primary"
        onClick={handleClick}
      >
        Neutral
      </Button>
      <Button
        name="bad"
        type="button"
        className="btn btn-primary"
        onClick={handleClick}
      >
        Bad
      </Button>
    </div>
  );
}

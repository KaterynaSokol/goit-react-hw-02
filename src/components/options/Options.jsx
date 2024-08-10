import css from "./Options.module.css";
const Options = ({ updateFeedback, resetFeedback, total }) => {
  return (
    <div className={css.btnList}>
      <button
        className={css.feedbackBtn}
        type="button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.feedbackBtn}
        type="button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.feedbackBtn}
        type="button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {total > 0 && (
        <button
          type="button"
          onClick={() => {
            resetFeedback();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

import { useState, useEffect } from "react";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";

const App = () => {
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem("feedbackValue")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );
  useEffect(() => {
    localStorage.setItem("feedbackValue", JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = (feedbackType) => {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };
  const total = reviews.good + reviews.neutral + reviews.bad;
  const positive = Math.round((reviews.good / total) * 100);
  const resetFeedback = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="container">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={total}
        resetFeedback={resetFeedback}
      />
      {total === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          total={total}
          positive={positive}
          updateFeedback={updateFeedback}
        />
      )}
    </div>
  );
};

export default App;

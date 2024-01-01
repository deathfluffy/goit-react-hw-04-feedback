import React, { useState } from 'react';
import { SectionMain } from './SectionMain/SectionMain';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export default function App  ()  {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = ({ target: { name } }) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const totalFeedback = Object.values(feedback).reduce((total, curr) => (total += curr), 0);

  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;


  return (
    <>
      <SectionMain title="Please leave feedback">
        <FeedbackOptions options={Object.keys(feedback)} leaveFeedback={leaveFeedback} />
      </SectionMain>

      <SectionMain title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </SectionMain>
    </>
  );
};



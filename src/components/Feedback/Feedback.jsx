import React, { useState } from "react";
import { StyledFeedback } from "./Feedback.styled"
import { Statistics } from "../Statistics/Statistics";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";

export const Feedback = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const mapState = {
    bad: setBad,
    neutral: setNeutral,
    good: setGood
  }

  const onLeaveFeedback = (grade) => {
    mapState[grade](prev => prev + 1)
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = (good, total) => {
    return (good * 100 / total).toFixed(2);
  }
  return (
    <StyledFeedback>
      <Section title='Please leave feedback'>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        {countTotalFeedback() ?
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} countTotalFeedback={countTotalFeedback()} countPositiveFeedbackPercentage={countPositiveFeedbackPercentage(good, countTotalFeedback())}
          /> : <Notification message="There is no feedback" />
        }
      </Section>
    </StyledFeedback>
  )
}
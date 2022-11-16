import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const buttonName = event.target.name;
    this.setState(prevState => {
      return {
        [buttonName]: prevState[buttonName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (this.countTotalFeedback() !== 0) {
      return `${Math.round(+`${(good / this.countTotalFeedback()) * 100}`)}%`;
    }
  };

  render() {
    return (
      <Section>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          object={this.state}
          total={this.countTotalFeedback()}
          totalPositive={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export { Feedback };

import { useState, useEffect } from 'react';
import Description from './Description/Description.jsx';
import Options from './Options/Options.jsx';
import Feedback from './Feedback/Feedback.jsx';
import Notification from './Notification/Notification.jsx';
import './App.css';


const App = () => {

      const [feedback, setFeedback] = useState(()=> {
            const savedFeedback = window.localStorage.getItem('saved-feedback');
            
            if (savedFeedback !== null) {
                  return JSON.parse(savedFeedback);
            }
            return {good: 0, neutral: 0, bad: 0};
      });

      useEffect(() => {
            window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
      }, [feedback]);

      const updateFeedback = (feedbackType) => {
            setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
      };

      const resetFeedback = () => {
            setFeedback({ good: 0, neutral: 0, bad: 0 });
      };

      const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

      const positiveFeedbackPercentage = totalFeedback !== 0 ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100) : 0;
      
      return (
            <>
                  <Description />
                  <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}></Options>
                  {totalFeedback !== 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedbackPercentage={positiveFeedbackPercentage} /> : <Notification/>}
            </>
      );
};

export default App;

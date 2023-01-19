import React, { useState, useEffect } from "react";
import Statistics from '../Statistics/Statistics'
import Section from '../Section/Section'
import Notification from '../Notification/Notification'


// class Feedback extends Component {
//     static defaultProps = {};
  
//     static propTypes = {};
  
//     state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
   
//    }
  
  
  
//    feedbackFunction = (e)=> {
//     const value = e.currentTarget.textContent.toLowerCase()
    
//     switch(value) {
//       case "good": 
//       this.setState((update)=> {
      
   
//         return {
          
//           good: update.good +1
          
//         } 
//       });
//       break;
      
//       case "neutral": 
//       this.setState((update)=> {
      
   
//         return {
          
//           neutral: update.neutral +1
          
//         } 
//       });
//       break;
  
//       case "bad": 
//       this.setState((update)=> {
      
   
//         return {
          
//           bad: update.bad +1
          
//         } 
//       });
//       break;
//       default:
//         console.log("Error")
  
//     }
  
    
//    }
  
   
//    countTotalFeedback = ()=> {
//     const result = this.state.bad + this.state.good + this.state.neutral;
//     return result;
  
    
//    }
  
//    countPositiveFeedbackPercentage = (total) => {
//     const result = (this.state.good/total)*100;
   
    
//     return Math.round(result);
//    }
  
  
//     render() {
    
//       return <>
//         <Section title="Please leave feedback">
//         <FeedbackOptions options={this.state} onLeaveFeedback={this.feedbackFunction}/>
  
//         </Section>
//          {this.countTotalFeedback() === 0 ? (<Notification message="There is no feedback"></Notification> ) 
//          : ( <Section title="Statistics" good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}>
//           <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}/>
//         </Section>)}
       
//       </>
//     }
//   }

 export default function Feedback() {
const [neutral, setNeutral] = useState(0);
const [good, setGood] = useState(0);
const [bad, setBad] = useState(0);
let [total, setTotal] = useState(0);
let [positive, setPositive] = useState(0);

const handleGood = () => {
    setGood(good + 1)
}

const handleNeutral = () => {
    setNeutral(neutral + 1)
}

const handleBad = () => {
    setBad(bad + 1)
}

// const handleTotal = () => {
//     setTotal(total = neutral + good + bad)
// }

// const handlePositive = () => {
//     setPositive(positive = Math.round((good/total)*100))
// }

useEffect(
    () => {
      setTotal(total = neutral + good + bad)
     
    }, [neutral, good, bad]
)

useEffect(
    () => {
      setPositive(positive = Math.round((good/total)*100))
    }, [total]
)


    return(
        <>
    <Section title="Please leave feedback">
    <ul>
        <li> <button type="button" onClick={handleGood}>Good</button></li>
        <li> <button type="button" onClick={handleNeutral}>Neutral</button></li>
        <li> <button type="button" onClick={handleBad}>Bad</button></li>

    </ul>

    </Section>
    {total === 0 ? (<Notification message="There is no feedback"></Notification> ) 
    : ( <Section title="Statistics" good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive}>
    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive}/>
    </Section>)}

    </>
    ) 
}

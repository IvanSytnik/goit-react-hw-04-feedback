import {useState, useEffext, useEffect} from "react";

export default function Feedback() {
const [neutral, setNeutral] = useState(0);
const [good, setGood] = useState(0);
const [bad, setBad] = useState(0);
const [total, setTotal] = useState(0);
const [positive, setPositive] = useState(0);

const handleGood = () => {
    setGood(state = state + 1)
}

const handleNeutral = () => {
    setNeutral(state = state + 1)
}

const handleBad = () => {
    setBad(state = state + 1)
}

const handleTotal = (total) => {
    setTotal(state = total)
}

const handlePositive = (totalPositive) => {
    setPositive(state = totalPositive)
}

useEffect(
    () => {
        const totalFeedback = neutral + good + bad;
        handleTotal(totalFeedback)
    }, [neutral, good, bad]
)

useEffect(
    () => {
        const totalPositive = Math.round((good/total)*100);
        handlePositive(totalPositive)
    }, [total]
)


    return(
        <>
    <Section title="Please leave feedback">
    <ul>
        <li> <button type="button" onClick={handleGood}></button></li>
        <li> <button type="button" onClick={handleNeutral}></button></li>
        <li> <button type="button" onClick={handleBad}></button></li>

    </ul>

    </Section>
    {total === 0 ? (<Notification message="There is no feedback"></Notification> ) 
    : ( <Section title="Statistics" good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}>
    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive}/>
    </Section>)}

    </>
    ) 
}
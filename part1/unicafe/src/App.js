import {useState} from 'react'

const Title = ({title}) =><h1>{title}</h1>;

const Button = ({name, handleClick })=><button onClick={handleClick }>{name}</button>
const Buttons =({handleGood,handleNeutral,handleBad })=>{
  return (
    <>
    <Button name="good" handleClick={handleGood}/>
    <Button name="neutral" handleClick={handleNeutral}/>
    <Button name="bad" handleClick={handleBad}/>
    </>
    )
}

const Statistic =({text, value})=>{
return (
  <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </tbody>
)
}
const Statistics = ({good, neutral, bad, total})=>{
  return total >0 ?(
  <>
  <h2>Statistics:</h2>
  <table>
        <Statistic text="good: " value={good}/> 
        <Statistic text="neutral: " value={neutral}/> 
        <Statistic text="bad: " value={bad}/>
         <Statistic text="all: " value={total}/>
         <Statistic text="average: " value={(good-bad)/total}/>
         <Statistic text="positive: " value={(good/total)*100 + ' %'}/>
    </table>
    </>
    ):<h2>No feedback yet</h2>
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood= () => setGood(good + 1);
  const handleNeutral= () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const total= good + neutral + bad;

  return (
      <div>
          <Title title="Give Feedback"/>
          <Buttons handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
          <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
      </div>
  )
}
export default App;
const Header =(props)=><h1>{props.course}</h1>

const Content =({parts})=>parts.map(part=> <p key={part.name}> {part.name} {part.exercises}</p>)

const Total =({exercises})=>{
    let total =0;
    exercises.forEach(exercise => {
        total+=exercise.exercises;
    });
    return(
        <p>Number of exercises {total}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    let part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    let part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    let part3 = {
      name: 'State of a component',
      exercises: 14
    }
    return (
      <div>
        <Header course={course}/>
        <Content parts={[part1, part2, part3]}/>
        <Total exercises={[part1, part2, part3]}/>
      </div>
    )
  }

  export default App
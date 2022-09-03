const Header = (props) =><h1> {props.course} </h1>

const Content =({parts})=>parts.map(part=> <p key={part.name}> {part.name} {part.exercises}</p>)

const Total = ({exercises}) => {
    let total = 0;
    exercises.forEach(exercise => {
        total += exercise.exercises
    })
    return (
        <p>Number of exercises {total}</p>
    )
}


const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  return (
      <div>
          <Header course={course.name}/>
          <Content parts={course.parts}/>
          <Total exercises={course.parts}/>
      </div>
  )
}
export default App;
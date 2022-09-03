const Header = (props) =><h1> {props.course} </h1>

const Content =({parts})=>parts.map(part=> <p key={part.id}> {part.name} {part.exercises}</p>)

const Total = ({parts}) => {
    let total = 0;
    parts.forEach(part => {
        total += part.exercises
    })
    return (
        <p>Number of exercises {total}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development';
    const partsCourse = [
        {
            id: 1,
            name: 'Fundamentals of React',
            exercises: 10
        }, {
            id: 2,
            name: 'Using props to pass data',
            exercises: 7
        }, {
            id: 3,
            name: 'State of a component',
            exercises: 14
        }
    ];
    return (
        <div>
            <Header course={course}/>
            <Content parts={partsCourse}/>
            <Total parts={partsCourse}/>
        </div>
    )
}

export default App
export function Course({ course }) {


  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}

export function Header({ course }) {
  //console.log(props);
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

export function Content({ course }) {
  console.log("Content: ", "\n course:", course, "\n course.parts: ", course.parts)
  const total = course.parts.reduce((sum, item) => sum + item.exercises, 0)
  return (
    <>
      <ul>
        {course.parts.map(item =>
          <Part key={item.id} item={item} total={total} />)}
      </ul>
      <h3>Total of exercises: {total} exercises</h3>
    </>
  )
}

export function Part({ item }) {
  console.log("Name: ", item.name)
  // console.log(props)
  return (
    <li>{item.name} {item.exercises}</li>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Teste',
        exercises: 1,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App
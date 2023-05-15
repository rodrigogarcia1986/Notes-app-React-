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
    //console.log("Content: ", "\n course:", course, "\n course.parts: ", course.parts)
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
    //console.log("Name: ", item.name)
    return (
        <li>{item.name} {item.exercises}</li>
    )
}


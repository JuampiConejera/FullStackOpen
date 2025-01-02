import Header from "./Header"
import Content from "./Content"

export const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((sum, part) => 
    sum + part.exercises, 0)
    return (
        <div>
            <Header courseName={course.name} />
            {course.parts.map(parts =>
                 <Content key={parts.name} parts={parts} />
                 )}
            <p>Total of {totalExercises} exercises </p>
        </div>
    )
}
import Header from "./Header"
import Content from "./Content"

export const Course = ({ course }) => {
    return (
        <div>
            <Header courseName={course.name} />
            {course.parts.map(parts => <Content key={parts.name} parts={parts} />)}
        </div>
    )
}
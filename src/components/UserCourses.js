import React from 'react'
import PropTypes from 'prop-types'
import CourseCard from './CourseCard';

const UserCourses = props => {
    const { courses } = props;

    const root = {
        display: 'flex',
        // justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: 32
    }

    console.log("courses:", courses);

    return (
        <section style={root}>
            
            {/* Aqui deben ir las tarjetas con los datos del curso */
                courses.map((course, index) => (<CourseCard course={course} key={index} />))  
            }

        </section>
    )
}

UserCourses.propTypes = {
    courses: PropTypes.array
}

export default UserCourses

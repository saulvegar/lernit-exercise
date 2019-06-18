import React from 'react'
import SwipeableViews from 'react-swipeable-views';

import UserCourses from './UserCourses'

import { makeStyles } from '@material-ui/core/styles';

import {
  CardContent,
  Typography,
  Tabs,
  Tab
} from '@material-ui/core';
// import CourseDetailsModules from '../../Dynamic/CourseDetails/CourseDetailsModules';

const useStyles = makeStyles(theme => {
  console.log("theme:" , theme)
  return {
  main: {
    backgroundColor: '#fff',
    // padding: '15px 90px'
  },
  header: {
    padding: '25px 90px 0 90px',
    display: 'flex',
    alignItems: 'flex-start',
    borderBottom: `1px solid ${theme.palette.grey['300']}`,
  },
  title: {
    letterSpacing: 1,
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 2),
    fontWeight: 400,
    paddingTop: '7px',
    // fontFamily: 'Monserrat'
  },
  tabs: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '25px'
    }
  },
  tab: {
    letterSpacing: 1,
    color: theme.palette.text.main,
    fontSize: '11pt',
    fontWeight: 700,
  }
} } );

function MyCourses(props) {

  const { courses, user } = props;
  const key = 'k5ztL93Ifab33r803CiIFcQi3s93';

  const getCourses = (courses, user) => {
    let cursos = Object.keys(courses).map(key => ({ ...courses[key] }));
    console.log("cursos: ", cursos);

    let myCourses = cursos.filter(course => course.students.hasOwnProperty(key));
    console.log("Mis cursos: ", myCourses);

    return myCourses;
  }


  getCourses(courses, user);


  console.log("courses: ", courses);
  console.log("user: ", user);

  const classes = useStyles();

  const coursesList = getCourses(courses, user);

  console.log("coursesList: ", coursesList);

  // Cambiar tabs
  const [tab, setTab] = React.useState(0);

  function handleTabClick(event, newTab) {
    setTab(newTab);
  }

  const handleChangeIndex = (index) => {
    setTab(index);
  }
  // Fin Cambiar tabs

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <Typography variant="h5" display="block" className={classes.title}>
          Mis cursos
        </Typography>
        <Tabs value={tab} indicatorColor="primary" textColor="secondary" variant="scrollable" scrollButtons="auto" className={classes.tabs} onChange={handleTabClick}>
          <Tab className={classes.tab} label="Todos los cursos" />
          <Tab className={classes.tab} label="Programas" />
          <Tab className={classes.tab} label="Learning Paths" />
          <Tab className={classes.tab} label="Cursos finalizados" />
        </Tabs>
      </div>
      <CardContent>
        <SwipeableViews index={tab} onChangeIndex={handleChangeIndex} >
          {<UserCourses courses={coursesList} />}
        </SwipeableViews>
      </CardContent>
    </div>
  )
}

export default MyCourses
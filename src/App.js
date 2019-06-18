import React from 'react';
import './App.css';
import MyCourses from './components/MyCourses';
import courses from './courses.json';
import user from './user.json';
import { Toolbar } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <Toolbar user={user} />
      <MyCourses courses={courses} user={user} />
    </React.Fragment>
  );
}

export default App;

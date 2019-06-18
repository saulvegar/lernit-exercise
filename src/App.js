import React from 'react';
import './App.css';
import MyCourses from './components/MyCourses';
import courses from './courses.json';
import user from './user.json';

function App() {
  return (
    <MyCourses courses={courses} user={user} />
  );
}

export default App;

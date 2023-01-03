import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List'
import Stopwatch from '../components/Stopwatch';
import style from './App.module.scss'

export default function App() {
  const [tasks, setTasks] = useState([{
      task: 'React',
      time: '02:00:00'
  }, {
      task: 'Javascript',
      time: '01:00:00'
  }, {
      task: 'Typescript',
      time: '03:00:00'
  }]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}></Form>
      <List tasks={tasks}></List>
      <Stopwatch></Stopwatch>
    </div>
  );
}



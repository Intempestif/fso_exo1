import React from 'react';
import './App.css';

const App = () => {

  const course = {
    name: 'Half Stack application development',
    title: 'FullStackOpen React Exercise 1',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ],
  }

  const total = course.parts.reduce((total, part) => total + part.exercises, 0)

  return (
    <div>
      <Header course={course} />
      <List parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.course.title}</h1>
      <h2>{props.course.name}</h2>
    </div>
  )
}

const List = (props) => {
  return (
    <div className="list">
      <h2>List of exercises</h2>
      <ul>
        <Part name={props.parts[0].name} number={props.parts[0].exercises} />
        <Part name={props.parts[1].name} number={props.parts[1].exercises} />
        <Part name={props.parts[2].name} number={props.parts[2].exercises} />
      </ul>
    </div>
  )
}

const Part = (props) => {
  return (
    <li className="">
      {props.name} : {props.number} exercises
    </li>
  )
}

const Total = (props) => {
  return (
    <div className="total">
      <h2>Total</h2>
      <p>Number of exercises in <b>total</b> : {props.total}</p>
    </div>
  )
}

export default App
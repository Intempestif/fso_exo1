import React from 'react';
import './App.css';

const App = () => {
  // const definitions
  const course = 'Half Stack application development'
  const title = 'FullStackOpen React Exercise 1'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const total = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header title={title} course={course} />
      <List part1={part1} part2={part2} part3={part3} />
      <Total total={total} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <h2>{props.course}</h2>
    </div>
  )
}

const List = (props) => {
  return (
    <div className="list">
      <h2>List of exercises</h2>
      <ul>
        <Part name={props.part1.name} number={props.part1.exercises} />
        <Part name={props.part2.name} number={props.part2.exercises} />
        <Part name={props.part3.name} number={props.part3.exercises} />
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
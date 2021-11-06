import React from 'react';
import './App.css';

const App = () => {
  // const definitions
  const course = 'Half Stack application development'
  const title = 'FullStackOpen React Exercise 1'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header title={title} course={course} />
      <List part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
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
        <Part1 name={props.part1} number={props.exercises1} />
        <Part2 name={props.part2} number={props.exercises2} />
        <Part3 name={props.part3} number={props.exercises3} />
      </ul>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <li className="part1">
      {props.name} : {props.number} exercises
    </li>
  )
}

const Part2 = (props) => {
  return (
    <li className="part2">
      {props.name} : {props.number} exercises
    </li>
  )
}

const Part3 = (props) => {
  return (
    <li className="part3">
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
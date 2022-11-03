import React from 'react';
import './style.css';
import moment from 'moment';

export default function App() {
  let periodOfDay = 'Morning';
  let dateTime = new Date();

  if (dateTime.getHours() > 16 && dateTime.getHours() < 24) {
    periodOfDay = 'Evening';
  }
  dateTime = dateTime.toLocaleDateString();
  console.log(moment().toLocaleString());
  let dateTimeString = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
  return (
    <div className="class1">
      <h1>
        Good <span className="periodOfDay"> {periodOfDay} </span>
      </h1>
      <p> {dateTimeString} </p>
    </div>
  );
}

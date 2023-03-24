import React, { useState } from "react";
import star from './photos/star.svg';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
        setCount(count - 1);
      } else {
        setCount(0);
      }
  }

  const stars = [];
  for (let i = 0; i < count; i++) {
    if (i % 1 === 0) {
      stars.push(<img key={i} className="star" src={star} alt="star" />);
    }
  }
console.log(stars)


  return (
    <div>
    <div className = "logo">
      <h1>LOGO</h1>
      <h3>Menu</h3>
    </div>
      <div className="counter">
      <button onClick={handleIncrement}>Add 1</button>
      <p className="count">{count}</p>
      <button onClick={handleDecrement}>Remove 1</button>
      </div>
      <div>
      {stars}
      </div>

    </div>
  );
}

export default Counter;

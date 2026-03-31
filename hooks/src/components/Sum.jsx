import React from "react";

const Sum =React.memo (() => {

  function calculateSum() {
    let sum = 0;

    for (let i = 0; i <= 1000; i++) {
      sum += i;
    }

    return sum;
  }

  const total = calculateSum();


  return (
    <div>
      <h1>Total sum: {total}</h1>
    </div>
  );
});

export default Sum;
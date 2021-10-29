import React, { useState } from "react";

function NumberNButton(props) {
  // eslint-disable-next-line
  const [number, setNumber] = useState(1);

  const checkPrime = () => {
    if (number < 0) {
      props.showAlert(
        "Your entering value is less than 0 which is not allowed!!"
      );
    } else if (number === 0) {
      props.showAlert(`${number} is Not Prime Number`);
    } else {
      let flag = 0;
      for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
          flag = 1;
          break;
        } else {
          flag = 0;
        }
      }
      if (flag === 0) {
        props.showAlert(`${number} is Prime Number`);
      } else {
        props.showAlert(`${number} is Not Prime Number`);
      }
    }
  };
  const palindromeCheck = () => {
    let rem;
    let sum = 0;
    let n = number;
    let temp = number;
    if (number < 0) {
      props.showAlert(
        "Your entering value is less than 0 which is not allowed!!"
      );
    } else {
      while (temp !== 0) {
        rem = temp % 10;
        temp = Math.floor(temp / 10);
        sum = sum * 10 + rem;
      } // eslint-disable-next-line
      if (n == sum) {
        props.showAlert(`${number} is a Palindrome Number`);
      } else {
        props.showAlert(`${number} is not a Palindrome Number`);
      }
    }
  };
  const reverse = () => {
    let rem;
    let sum = 0;
    let temp = number;
    if (number < 0) {
      props.showAlert(
        "Your entering value is less than 0 which is not allowed!!"
      );
    } else {
      while (temp !== 0) {
        rem = temp % 10;
        temp = Math.floor(temp / 10);
        sum = sum * 10 + rem;
      } // eslint-disable-next-line
      props.showAlert(`Reverse of ${number} is ${sum}`);
    }
  };
  const factorial = () => {
    if (number < 0) {
      props.showAlert(
        "Your entering value is less than 0 which is not allowed!!"
      );
    } // eslint-disable-next-line
    else if(number > 21){
      props.showAlert(
        "Your entering value is too high to calculate the factorial!!"
      );
    }// eslint-disable-next-line
    else if (number == 0 || number == 1) {
      props.showAlert(`is ${1}`);
    } else {
      let fact = 1;
      for (let i = 2; i <= number; i++) {
        fact *= i;
      }
      props.showAlert(`is ${fact}`);
    }
  };
  const amstrongCheck = () => {
    let rem;
    let sum = 0;
    let n = number;
    let temp = number;
    while (temp) {
      rem = temp % 10;
      temp = Math.floor(temp / 10);
      sum = sum + rem * rem * rem;
    }
    // eslint-disable-next-line
    if (n == sum) {
      props.showAlert(`${number} is a Amstrong number`);
    } else {
      props.showAlert(`${number} is not a Amstrong number`);
    }
  };
  const enterValue = (e) => {
    setNumber(e.target.value);
  };
  return (
    <>
      <div className="container mb-3 my-4">
        <label htmlFor="user_input" className="form-label">
          Enter your number below
        </label>
        <input
          type="number"
          value={number}
          onChange={enterValue}
          className="form-control"
          id="user_input"
          min={1}
        />
        <div className="my-4">
          <button
            type="button"
            onClick={checkPrime}
            className={`btn btn-success my-2 ${props.disable}`}
          >
            Prime Check
          </button>
          <button
            type="button"
            onClick={palindromeCheck}
            className={`btn btn-success my-2 ${props.disable} mx-2`}
          >
            Palindrome Check
          </button>
          <button
            type="button"
            onClick={amstrongCheck}
            className={`btn btn-success my-2 ${props.disable}`}
          >
            Amstrong Check
          </button>
          <button
            type="button"
            onClick={factorial}
            className={`btn btn-success my-2 ${props.disable} mx-2`}
          >
            Factoral Of {number}
          </button>
          <button
            type="button"
            onClick={reverse}
            className={`btn btn-success my-2 ${props.disable}`}
          >
            Reverse Of {number}
          </button>
        </div>
      </div>
    </>
  );
}

export default NumberNButton;

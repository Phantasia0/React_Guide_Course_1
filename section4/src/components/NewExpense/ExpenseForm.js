import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // const titleChangeHandler = (event) => {
  //   // setEnteredTitle(event.target.value);
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };
  //
  // const amountChangeHandler = (event) => {
  //   // setEnteredAmount(event.target.value);
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // };
  //
  // const dateChangeHandler = (event) => {
  //   // setEnteredDate(event.target.value);
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: event.target.value };
  //   });
  // };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setUserInput((prevState) => ({ ...prevState, enteredTitle: value }));
    } else if (identifier === "date") {
      setUserInput((prevState) => ({ ...prevState, enteredDate: value }));
    } else {
      setUserInput((prevState) => ({
        ...prevState,
        value,
      }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const {
      enteredTitle: title,
      enteredAmount: amount,
      enteredDate: date,
    } = userInput;

    const expenseData = { title, amount: Number(amount), date: new Date(date) };

    if (expenseData)
      setUserInput((prevState) => ({
        ...prevState,
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      }));

    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

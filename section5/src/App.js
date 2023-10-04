import React, { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import "./App.css";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercise!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addItemHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) =>
      prevGoals.filter((goal) => goal.id !== goalId),
    );
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addItemHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;

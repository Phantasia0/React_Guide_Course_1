import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Section from "../UI/Section";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const generateId = taskData.name;
    const createdTask = { id: generateId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enteredTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-http-627e5-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText),
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enteredTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

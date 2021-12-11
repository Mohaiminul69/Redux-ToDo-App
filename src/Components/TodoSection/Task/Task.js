import React from "react";
import { ListGroup } from "react-bootstrap";

const Task = ({ task }) => {
  const { name, details } = task;
  return (
    <ListGroup.Item>
      <div className="todo-body">
        <div className="list-title">
          <h4>{name}</h4>
          <p>{details}</p>
        </div>
        <div className="list-badge">
          <h5>Button/state</h5>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default Task;

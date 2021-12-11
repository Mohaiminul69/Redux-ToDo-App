import React, { useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import Task from "./Task/Task";
import "./TodoSection.css";

const TodoSection = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleTaskName = (e) => {
    setName(e.target.value);
  };
  const handleDetails = (e) => {
    setDetails(e.target.value);
  };
  const handleAddTask = () => {
    setTasks([...tasks, { name, details }]);
  };
  return (
    <div className="todo-section">
      <Container>
        <div className="todo-wrap">
          <div className="todo-board">
            <Row>
              <Col md={12}>
                <h3 className="text-white my-3">My Todos</h3>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form>
                  <Row className="mb-3 text-white">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Task</Form.Label>
                      <Form.Control
                        onChange={handleTaskName}
                        type="text"
                        placeholder="Task Name"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Details</Form.Label>
                      <Form.Control
                        onChange={handleDetails}
                        type="text"
                        placeholder="Task Details"
                      />
                    </Form.Group>
                  </Row>
                  <Button onClick={handleAddTask} className="todo-submit-btn">
                    Add
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="todo-list mt-4">
                  <ListGroup>
                    {tasks.map((task, index) => (
                      <Task key={index} task={task} />
                    ))}
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TodoSection;

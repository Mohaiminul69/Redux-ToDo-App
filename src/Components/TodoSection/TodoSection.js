import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import './TodoSection.css';

const TodoSection = () => {
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
                                <div className="todo-action">
                                    <div className="todo-input d-flex">
                                        <div className="mb-2">
                                            <label htmlFor="task">Task</label>
                                            <input type="text" id="task" name="task" className="form-control" />
                                        </div>
                                        <div className="mb-2 ms-2">
                                            <label htmlFor="details">Details</label>
                                            <textarea type="text" className="form-control" name="details" id="details" rows="1" />
                                        </div>
                                    </div>
                                    <div className="todo-submit">
                                        <button className="todo-submit-btn">Add</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="todo-list mt-4">
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <div className="todo-body">
                                                <div className="list-title">
                                                    <h4>Task 1</h4>
                                                    <p>This is task one</p>
                                                </div>
                                                <div className="list-badge">
                                                    <h5>Button/state</h5>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="todo-body">
                                                <div className="list-title">
                                                    <h4>Task 2</h4>
                                                    <p>This is task two</p>
                                                </div>
                                                <div className="list-badge">
                                                    <h5>Button/state</h5>
                                                </div>
                                            </div>
                                        </ListGroup.Item>

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
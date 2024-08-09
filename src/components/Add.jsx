import React, { useContext, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Select from 'react-select';
import { addTask } from '../services/AllApi';
import { taskContext } from './Contextshare';
import { useNavigate } from 'react-router-dom';

function Add() {
    const { taskData, settaskData } = useContext(taskContext);
    const navigate = useNavigate();


    // hold inputs
    const [normalInputs, setNormalInput] = useState({
        id: "", task: "", description: ""
    });

    // to hold status
    const [status, setStatus] = useState("");

    // define normal input function
    const getandsetNormalInputs = (e) => {
        const { name, value } = e.target;
        setNormalInput({ ...normalInputs, [name]: value });
    };

    const options = [
        { value: 'High', label: 'High' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Low', label: 'Low' }
    ];

    // define submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { id, task, description } = normalInputs;

        if (!id || !task || !description || !status) {
            alert('Please fill the form');
        } else {
            const data = {
                id,
                task,
                description,
                status
            };

            // API call
            try {
                const response = await addTask(data);
                console.log(response);

                if (response.status === 200) {
                    setNormalInput({ id: "", task: "", description: "" });
                    setStatus("");
                    settaskData(response.data);

                } else {
                    alert('Request failed');
                }
            } catch (error) {
                console.error('Error adding task:', error);
                alert('An error occurred while adding the task.');
            }
        }
    };

    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">ADD TASK</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body ms-2 me-2">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            {/* id */}
                            <FloatingLabel className='mb-3' controlId="floatingInputid" label="Id">
                                <Form.Control
                                    type="text"
                                    placeholder='ID'
                                    name="id"
                                    value={normalInputs.id}
                                    onChange={getandsetNormalInputs}
                                />
                            </FloatingLabel>

                            {/* task */}
                            <FloatingLabel className='mb-3' controlId="floatingInputname" label="Task">
                                <Form.Control
                                    type="text"
                                    placeholder='Task'
                                    name="task"
                                    value={normalInputs.task}
                                    onChange={getandsetNormalInputs}
                                />
                            </FloatingLabel>

                            {/* description */}
                            <FloatingLabel className='mb-3' controlId="floatingInputdescription" label="Description">
                                <Form.Control
                                    type="text"
                                    placeholder='Description'
                                    name="description"
                                    value={normalInputs.description}
                                    onChange={getandsetNormalInputs}
                                />
                            </FloatingLabel>

                            {/* status */}
                            <Form.Group className='mb-3'>
                                <Form.Label>Status</Form.Label>
                                <Select
                                    options={options}
                                    onChange={(e) => setStatus(e.value)}
                                    value={options.find(option => option.value === status)}
                                />
                            </Form.Group>
                        </Row>
                        <Button type="submit" className="btn btn-primary mb-4 pt-3 pb-3">SUBMIT</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Add;
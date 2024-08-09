import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Select from 'react-select';
import { allTasks, editTask } from '../services/AllApi';
import { taskContext } from './Contextshare';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const { settaskData } = useContext(taskContext);
  const navigate = useNavigate();
  const [normalInputs, setNormalInput] = useState({
    task: "",
    description: ""
  });
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState(""); 

  const { id } = useParams();

  useEffect(() => {
    getTasks();
  }, [id]);

  const getTasks = async () => {
    try {
      const { data } = await allTasks("");
      const existingTask = data.find(item => item._id === id);
      if (existingTask) {
        setNormalInput({
          task: existingTask.task,
          description: existingTask.description
        });
        setStatus(existingTask.status); 
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setMessage("An error occurred while fetching the task.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNormalInput({ ...normalInputs, [name]: value });
  };

  const options = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];

  const handleStatusChange = (selectedOption) => {
    setStatus(selectedOption ? selectedOption.value : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { task, description } = normalInputs;
    if (!task || !description || !status) {
      alert("Please fill the form");
      return;
    }

    const data = {
      task,
      description,
      status
    };

    try {
      const response = await editTask(id, data);
      if (response.status === 200) {
        setNormalInput({ task: "", description: "" });
        setStatus("");
        settaskData(response.data);
        navigate("/home");
      } else {
        setMessage("Request failed");
      }
    } catch (error) {
      console.error("Error updating task:", error);
      setMessage("An error occurred while updating the task.");
    }
  };

  return (
    <div className="container shadow pt-5 pb-5 ps-5 pe-5" style={{ marginTop: '90px' }}>
      <h1 className='pb-5'>EDIT YOUR TASK</h1>
      <div className='container'>
        <Form onSubmit={handleSubmit}>
          <Row>
            <FloatingLabel className='mb-3' controlId="floatingInputtask" label="Task">
              <Form.Control
                type="text"
                placeholder='Task'
                name="task"
                value={normalInputs.task}
                onChange={handleInputChange}
              />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingInputdescription" label="Description">
              <Form.Control
                type="text"
                placeholder='Description'
                name="description"
                value={normalInputs.description}
                onChange={handleInputChange}
              />
            </FloatingLabel>

            <Form.Group className='mb-3'>
              <Form.Label>Status</Form.Label>
              <Select
                options={options}
                value={options.find(option => option.value === status)} 
                onChange={handleStatusChange} 
              />
            </Form.Group>
          </Row>
          <Button type="submit" className="btn btn-primary mb-4 mt-3 pt-3 pb-3">UPDATE TASK</Button>
        </Form>
        {message && <div className="alert alert-info mt-3">{message}</div>} 
      </div>
    </div>
  );
}

export default Edit;

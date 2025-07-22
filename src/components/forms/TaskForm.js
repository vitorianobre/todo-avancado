  import { useState, useEffect } from 'react';
  import styles from './TaskForm.module.css'

  import Input from "../layout/Input";
  import Button from "../layout/Button";

  function TaskForm({handleSubmit, taskData, text, placeholder, btnIcon}) {
    
    const [task, setTask] = useState({})

    useEffect(() => {
      if (taskData) {
        setTask(taskData);
      }
    }, [taskData]);

    function submit(e) {
      e.preventDefault()
      !taskData ? handleSubmit(task) : handleSubmit(task.id, task.name)
      setTask({}) // input reset
    }

    function handleChange(e) {
      setTask({...task, [e.target.name]: e.target.value})
    }

    return (
      <form onSubmit={submit} className={styles.form_container}>
        <Input
          type="text"
          text={text}
          name="name"
          placeholder={placeholder}
          handleOnChange={handleChange}
          value={task.name || ''}
        />
        <Button text={btnIcon} />
      </form>
    )
  }

  export default TaskForm
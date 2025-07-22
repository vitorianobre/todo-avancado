import {BsBackspaceFill, BsPlus, BsCheckAll} from 'react-icons/bs'
import styles from './Home.module.css'
import { useState, useEffect } from 'react';

import TaskForm from "../forms/TaskForm"
import SearchForm from "../forms/SearchForm"
import TaskCard from '../layout/TaskCard';
import FilterSelect from '../layout/FilterSelect';

function Home() {
  const [showTaskForm, setShowTaskForm] = useState(true)
  const [status, setStatus] = useState([])
  const [tasks, setTasks] = useState([])
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all'); 
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/tasks', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTasks(data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
      fetch('http://localhost:5000/status', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          setStatus(data)
        })
        .catch((err) => console.log(err))
    }, [])

  function addNewTask(task) {
    task.status = status[1]

    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(resp => resp.json())
      .then(data => {
        setTasks((prevTasks) => [...prevTasks, data])
      })
      .catch(err => console.log(err))
  }

  function checkTask(id, currentStatus) {
    const newStatus = currentStatus.id === '2' ? status[0] : status[1];

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: newStatus })
    })
      .then(resp => resp.json())
      .then(data => {
        setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === id ? data : task
        )
      )
      })
      .catch(err => console.log(err))
  }

  function editTaskBtn(id, name) {
    setShowTaskForm(false)
    setTaskToEdit({ id: id, name: name })
  }

  function removeTask(id) {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(() => {
        setTasks(tasks.filter((tasks) => tasks.id !== id))
      })
      .catch(err => console.log(err))
  }

  const taskActions = {
    check: checkTask,
    edit: editTaskBtn,
    remove: removeTask
  }

  function saveTaskEdited(id, name) {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
      .then(resp => resp.json())
      .then(data => {
        setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === id ? data : task
        )
      )
      })
      .catch(err => console.log(err))

    setShowTaskForm(true)
  }

  function cancelEdit() {
    setShowTaskForm(true)
  }

  function selectedFilter(valueSelected) {
    setActiveFilter(valueSelected);
  }

  function searchTask(searchText) {
    setSearchTerm(searchText);
  }

  const displayedTasks = tasks
    .filter(task => {
      if (activeFilter === 'all') {
        return true;
      }
      return task.status.name === activeFilter;
    })
    .filter(task =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.todo_container}>
      <h1>To Do Avançado</h1>

      {showTaskForm && 
        <TaskForm 
          handleSubmit={addNewTask}
          text="Adicione sua tarefa"
          placeholder="O que você vai fazer?"
          btnIcon={<BsPlus />} 
        />
      }
      
      {!showTaskForm && 
        <>
          <TaskForm 
            handleSubmit={saveTaskEdited} 
            text="Edite sua tarefa" 
            btnIcon={<BsCheckAll />} 
            taskData={taskToEdit} 
          />
          <button onClick={cancelEdit} className={styles.btnCancel}>Cancelar</button>
        </>
      }

      {showTaskForm && 
        <div className={styles.search_container}>
          <SearchForm 
            handleSearch={searchTask}
            text="Pesquisar:" 
            placeholder="Buscar..."
            btnIcon={<BsBackspaceFill />} 
          />

          <FilterSelect handleSelected={selectedFilter} />
        </div>
      }

      { showTaskForm &&
        <div>
          {displayedTasks.length > 0 ? (
            displayedTasks.map((task) => (
              <TaskCard 
                key={task.id} 
                id={task.id}
                name={task.name}
                status={task.status}
                actions={taskActions} 
              />
            ))
          ) : (
            <p>Nenhuma tarefa encontrada.</p>
          )}
        </div>
      }
    </div>
  )
}

export default Home
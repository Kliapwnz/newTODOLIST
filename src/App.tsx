import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";

export type FilterValuesType = "all" | "completed" | "active"

function App() {

    let [task, setTask] = useState<TasksPropsType[]>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValuesType>("all")

    function removeTask(id: number) {
        task = task.filter(e => e.id !== id)
        setTask(task)
    }

    function changeFilter(value:FilterValuesType){
        setFilter(value)
    }
    let taskForTodolist = task
    if(filter === "completed") {
        taskForTodolist = task.filter(t=>t.isDone === true)
    } if(filter === "active") {
        taskForTodolist = task.filter(t=>t.isDone === false)
    }



    return (
        <div className="App">
            <Todolist title="What to learn"
                      task={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;

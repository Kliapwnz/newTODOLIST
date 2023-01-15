import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks([...tasks]);
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todoLists.find(e => e.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodoLists([...todoLists])
        }
    }

    let todoListId1 = v1()
    let todoListId2 = v1()

    let [todoLists, setTodoLists] = useState<Array<TodolistType>>([
        {id: v1(), title: "What to learn", filter: "all"},
        {id: v1(), title: "What to Buy", filter: "all"}
    ])
    let [tasks, setTasks] = useState({
        [todoListId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todoListId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Cola", isDone: true},
            {id: v1(), title: "Meat", isDone: false},
            {id: v1(), title: "Beer", isDone: false},
            {id: v1(), title: "Burger", isDone: false},
        ]
    })

    return (
        <div className="App">
            {
                todoLists.map((e) => {
                    let tasksForTodolist = tasks;

                    if (e.filter === "active") {
                        tasksForTodolist = tasks[e.id].filter(t => t.isDone === false);
                    }
                    if (e.filter === "completed") {
                        tasksForTodolist = tasks[e.id].filter(t => t.isDone === true);
                    }
                    return (
                        <Todolist
                            key={e.id}
                            id={e.id}
                            title={e.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={e.filter}
                        />
                    )
                })
            }

        </div>
    );
}

export default App;

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

    function removeTask(id: string, todolistId: string) {
        let removedTask = tasksObj[todolistId]
        let filteredTasks = removedTask.filter(t => t.id != id);
        tasksObj[todolistId] = filteredTasks
        setTasksObj({...tasksObj});
    }

    function addTask(title: string, todolistId: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let tasks = tasksObj[todolistId]
        let newTasks = [newTask, ...tasks];
        tasksObj[todolistId] = newTasks
        setTasksObj({...tasksObj});
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let changeStatusTask = tasksObj[todolistId]
        let task = changeStatusTask.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
            setTasksObj({...tasksObj});
        }
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todoLists.find(e => e.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodoLists([...todoLists]);
        }
    }

    let todoListId1 = v1()
    let todoListId2 = v1()

    let [todoLists, setTodoLists] = useState<Array<TodolistType>>([
        {id: v1(), title: "What to learn", filter: "all"},
        {id: v1(), title: "What to Buy", filter: "all"}
    ])
    let [tasksObj, setTasksObj] = useState({
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
        ],
    });

    return (
        <div className="App">
            {
                todoLists.map((e) => {
                    let tasksForTodolist = tasksObj[e.id];

                    if (e.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                    }
                    if (e.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
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

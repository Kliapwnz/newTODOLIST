import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    let task = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" task={task}/>
        </div>
    );
}

export default App;

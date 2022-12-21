import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    let task1 = [
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"JS", isDone:true},
        {id:3, title:"React", isDone:false},
    ]

    let task2 = [
        {id:1, title:"Messi", isDone:true},
        {id:2, title:"Federer", isDone:false},
        {id:3, title:"Ronaldo", isDone:false},
    ]
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={task1}/>
            <Todolist title="Football players" tasks={task2}/>
        </div>
    );
}

export default App;

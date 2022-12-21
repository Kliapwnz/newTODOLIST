import React from 'react';
import {FilterValuesType} from "./App";

type PropsType = {
    title: string
    task: TasksPropsType[]
    removeTask:(id:number)=>void
    changeFilter:(value:FilterValuesType)=>void

}

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {
    return (

        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.task.map(e => <li>
                        <button onClick={()=>{props.removeTask(e.id)}}>X</button>
                        <input type="checkbox" checked={e.isDone}/>
                        <span>{e.title}</span></li>)
                }

            </ul>
            <div>
                <button onClick={()=>{props.changeFilter("all")}}>All</button>
                <button onClick={()=>{props.changeFilter("active")}}>Active</button>
                <button onClick={()=>{props.changeFilter("completed")}}>Completed</button>
            </div>
        </div>

    );
};


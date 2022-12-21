import React from 'react';

type PropsType = {
    title: string
    tasks: TasksPropsType[]
    students: Array<string>
}

type TasksPropsType = {
    taskId: number
    title: string
    isDone: boolean
}



export const Tasks = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(e => {
                    return (
                        <li><input type="checkbox" checked={e.isDone}/><span>{e.title}</span></li>
                    )
                })}
            </ul>
            <ul>
                {props.students.map(e=>{
                    return(
                        <li>{e}</li>
                    )
                })}
            </ul>
        </div>
    );
};


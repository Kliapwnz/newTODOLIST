import React from 'react';

type PropsType = {
    title: string
    task: TasksPropsType[]
}

type TasksPropsType = {
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
                        <button onClick={()=>{alert(e.id)}}>X</button>
                        <input type="checkbox" checked={e.isDone}/>
                        <span>{e.title}</span></li>)
                }

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>

    );
};


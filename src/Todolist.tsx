import React from 'react';

type PropsType = {
    title: string
    tasks: TasksPropsType[]
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
                    props.tasks.map(e => <li>
                        <button>X</button>
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


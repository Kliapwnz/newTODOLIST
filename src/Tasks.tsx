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
        </div>
    );
};


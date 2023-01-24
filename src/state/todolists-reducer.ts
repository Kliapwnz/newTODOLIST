import {TodolistType} from "../App";

export const TodolistsReducer=(state:TodolistType[], action:any)=>{
    switch (action.type){
        case "XXX": {
            return state
        }
        default: return state
    }
}

export const removeTodolistAC=(id:string)=>{
    return{
        type: 'REMOVE-TODOLIST',
        payload:{
            id
        }
    }as const
}
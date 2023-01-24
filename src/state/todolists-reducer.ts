import {TodolistType} from "../App";

export const TodolistsReducer=(state:TodolistType[], action:any)=>{
    switch (action.type){
        case "XXX": {
            return state
        }
        default: return state
    }
}
type removeTodolistACType= ReturnType<typeof removeTodolistAC>
export const removeTodolistAC=(id:string)=>{
    return{
        type: 'REMOVE-TODOLIST',
        payload:{id}
    }as const
}
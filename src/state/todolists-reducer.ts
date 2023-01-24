import {TodolistType} from "../App";

export const TodolistsReducer=(state:TodolistType[], action:TsarType)=>{
    switch (action.type){
        case "REMOVE-TODOLIST":{
            return state.filter(e=>e.id!==action.payload.id)
    }
        default: return state
    }
}
type TsarType = removeTodolistACType


type removeTodolistACType= ReturnType<typeof removeTodolistAC>
export const removeTodolistAC=(id:string)=>{
    return{
        type: 'REMOVE-TODOLIST',
        payload:{id}
    }as const
}
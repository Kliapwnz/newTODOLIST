import {TodolistType} from "../App";
import {v1} from "uuid";

type ActionType = {
    type: string
    [key: string]: any
}

export const todolistsReducer = (state: TodolistType[], action: ActionType): TodolistType[] => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(el => el.id != action.id)
        }
        case "ADD-TODOLIST": {
            return [...state, {
                id: v1(),
                title: action.title,
                filter: "all"
            }]
        }
        case "CHANGE-TODOLIST-TITLE": {
            const todolist = state.find(el=>el.id === action.id)
            if(todolist){
                todolist.title = action.title
            }
            return [...state]
        }
        case "CHANGE-TODOLIST-FILTER": {
            const todolist = state.find(el=>el.id === action.id)
            if(todolist){
                todolist.filter = action.filter
            }
            return [...state]
        }
        default:
            throw new Error("Stop it")
    }
}

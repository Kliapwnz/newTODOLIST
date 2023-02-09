import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST"
    id: string
}
export type AddTodolistActionType = {
    type: "ADD-TODOLIST"
    title: string
}
export type ChangeTodolistTitleActionType = {
    type: "CHANGE-TODOLIST-TITLE"
    id: string
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER"
    id: string
    filter: FilterValuesType
}
export type ActionType =
    RemoveTodolistActionType
| AddTodolistActionType
| ChangeTodolistTitleActionType
| ChangeTodolistFilterActionType

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
            const todolist = state.find(el => el.id === action.id)
            if (todolist) {
                todolist.title = action.title
            }
            return [...state]
        }
        case "CHANGE-TODOLIST-FILTER": {
            const todolist = state.find(el => el.id === action.id)
            if (todolist) {
                todolist.filter = action.filter
            }
            return [...state]
        }
        default:
            throw new Error("Stop it")
    }
}

export const removeTodolistAC = (todolistId:string):RemoveTodolistActionType =>{
    return {type:"REMOVE-TODOLIST", id: todolistId}
}

export const addTodolistAC = (newTodolistTitle:string): AddTodolistActionType =>{
    return {type: "ADD-TODOLIST", title: newTodolistTitle}
}
export const changeTitleTodolistAC = (todolistId:string, newTodolistTitle:string):ChangeTodolistTitleActionType=>{
    return {type: "CHANGE-TODOLIST-TITLE" as const,
        id: todolistId,
        title: newTodolistTitle}
}
export const changeFilterTodolistAC = (todolistId:string, newFilter:FilterValuesType):ChangeTodolistFilterActionType=>{
    return {
        type: "CHANGE-TODOLIST-FILTER" as const,
        id: todolistId,
        filter: newFilter
    }
}
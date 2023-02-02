import {userReducer} from "./user-reducer";

test("user reducer should increment only age", ()=>{
    const startState= {age: 22, childrenCount: 26, name: "Bradley"}

    const endState = userReducer(startState, {type: "INCREMENT-AGE"})

    expect(endState.age).toBe(23)
    expect(endState.childrenCount).toBe(26)
})

test("user reducer should increment only childrenCount", ()=>{
    const startState = {age: 22, childrenCount: 26, name: "Bradley"}

    const endState = userReducer(startState, {type:"INCREMENT-CHILDREN-COUNT"})

    expect(endState.childrenCount).toBe(27)
    expect(endState.age).toBe(22)
})

test("user reducer should increment only childrenCount", ()=>{
    const startState = {age: 22, childrenCount: 26, name: "Bradley"}
    const newName = "Evgeniy"
    const endState = userReducer(startState, {type: "CHANGE-NAME", newName})

    expect(endState.name).toBe(newName)
})


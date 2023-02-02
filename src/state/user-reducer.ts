type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = {
    type: string
    [key: string]: any
}


export const userReducer = (state: StateType, action: ActionType) => {
    let newState = {...state}
    switch (action.type) {
        case "INCREMENT-AGE":
            newState.age = state.age + 1;
            return newState;
        case "INCREMENT-CHILDREN-COUNT":
            newState.childrenCount = state.childrenCount + 1;
            return newState;
        default:
            throw new Error("Stop this")
    }
}

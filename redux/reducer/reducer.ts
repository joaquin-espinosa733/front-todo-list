import { Action } from "redux";
import { GET_TASKS } from "../action-type/action-type";
import { Task } from "@/interfaces/interfaces";

export interface taskInterfaces {
    tasks: Task[]
}

export const initialState = {
    tasks: []
}

const rootReducer = (state: taskInterfaces = initialState, action: any) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;
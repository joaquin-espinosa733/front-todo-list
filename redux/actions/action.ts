// actions/action.ts
import { GET_TASKS, GetTasksAction } from '../action-type/action-type';
import axios from 'axios';
import { Task } from '../../interfaces/interfaces';
import { Dispatch } from 'react';


export const getTasks = ():any => {
    return async function (dispatch: Dispatch<GetTasksAction>) {
        const apiTask = await axios("https://todo-list-65xp.onrender.com/task/");
        const task = apiTask.data;
        
        //* payload la informacion que mandamos a los reducer:
        dispatch({ type: GET_TASKS, payload: task })
    }
};


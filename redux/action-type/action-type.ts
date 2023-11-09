import { Task } from "@/interfaces/interfaces";

export const GET_TASKS = "GET_TASKS";

export type GetTasksAction = {
    type: "GET_TASKS";
    payload: Task[]; // Ajusta el tipo de payload según tus necesidades
}
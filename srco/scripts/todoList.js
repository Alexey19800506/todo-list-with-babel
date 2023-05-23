import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { onDeleteTask } from './deleteTask.js';

export const initTodoListHandlers = () => {
    const createBtnElem = document.querySelector('.create-task-btn');
    createBtnElem.addEventListener('click', onCreateTask);
    const todoListElem = document.querySelector('.list');
    todoListElem.addEventListener('click', onToggleTask);
    const deleteBtnElem = document.querySelector('.list-item__delete-btn');
    deleteBtnElem.addEventListener('click', onDeleteTask);
}
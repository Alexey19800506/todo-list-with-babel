import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { deleteTask, getTasksList } from './tasksGateway.js';

export const onDeleteTask = e => {
    const deleteBtn = e.target.classList.contains('list-item__delete-btn');
    if (!deleteBtn) {
        return;
    }

    const taskId = e.target.dataset.id;

    deleteTask(taskId)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList);
            renderTasks();
        });
};
import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { deleteTask, getTasksList } from './tasksGateway.js';
export var onDeleteTask = function onDeleteTask(e) {
  var deleteBtn = e.target.classList.contains('list-item__delete-btn');
  if (!deleteBtn) {
    return;
  }
  var taskId = e.target.dataset.id;
  deleteTask(taskId).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};
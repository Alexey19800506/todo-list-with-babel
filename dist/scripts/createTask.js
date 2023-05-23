import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';
export var onCreateTask = function onCreateTask() {
  var taskTittleInputElem = document.querySelector('.task-input');
  var text = taskTittleInputElem.value;
  if (!text) {
    return;
  }
  taskTittleInputElem.value = '';
  var newTask = {
    text: text,
    done: false,
    createDate: new Date().toISOString()
  };
  createTask(newTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};
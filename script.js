$(document).ready(function () {
  const taskList = $('#task-list');
  const newTaskInput = $('#new-task-input');
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let currentFilter = 'all';

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Render tasks based on current filter
  function renderTasks() {
    taskList.empty();

    let filteredTasks = tasks;
    if (currentFilter === 'pending') {
      filteredTasks = tasks.filter((t) => !t.completed);
    } else if (currentFilter === 'completed') {
      filteredTasks = tasks.filter((t) => t.completed);
    }

    if (filteredTasks.length === 0) {
      taskList.append(
        '<li class="list-group-item text-center text-muted">No tasks here!</li>'
      );
      return;
    }

    filteredTasks.forEach((task, index) => {
      const taskItem = $(`
        <li class="list-group-item d-flex justify-content-between align-items-center ${
          task.completed ? 'task-completed' : ''
        }">
          <span class="task-text pointer">${task.text}</span>
          <div>
            <button class="btn btn-sm btn-success mark-complete-btn me-2" title="Toggle Complete">
              ${task.completed ? 'Undo' : 'Done'}
            </button>
            <button class="btn btn-sm btn-danger delete-task-btn" title="Delete Task">&times;</button>
          </div>
        </li>
      `);

      // Mark task complete toggle handler
      taskItem.find('.mark-complete-btn').click(() => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
      });

      // Delete task handler
      taskItem.find('.delete-task-btn').click(() => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      });

      // Optional: Toggle completion by clicking task text
      taskItem.find('.task-text').click(() => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
      });

      taskList.append(taskItem);
    });
  }

  // Add task handler
  $('#add-task-btn').click(() => {
    const taskText = newTaskInput.val().trim();
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks();
    newTaskInput.val('');
  });

  // Allow pressing Enter to add task
  newTaskInput.keypress((e) => {
    if (e.which === 13) {
      $('#add-task-btn').click();
    }
  });

  // Filter buttons handler
  $('.filter-btn').click(function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    currentFilter = $(this).data('filter');
    renderTasks();
  });

  // Initial render
  renderTasks();
});

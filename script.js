document.getElementById('todo-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.getElementById('task-input');
  const taskText = input.value.trim();

  // Input validation
  if (taskText.length === 0) {
    alert("Task cannot be empty.");
    return;
  }

  if (taskText.length > 100) {
    alert("Task is too long. Keep it under 100 characters.");
    return;
  }

  if (/</.test(taskText) || />/.test(taskText)) {
    alert("Invalid characters detected.");
    return;
  }

  // Sanitize by escaping HTML
  const safeTask = taskText.replace(/&/g, "&amp;")
                           .replace(/</g, "&lt;")
                           .replace(/>/g, "&gt;");

  addTaskToList(safeTask);
  input.value = "";
});

function addTaskToList(task) {
  const li = document.createElement('li');
  li.innerHTML = `${task} <button onclick="this.parentElement.remove()">Delete</button>`;
  document.getElementById('task-list').appendChild(li);
}

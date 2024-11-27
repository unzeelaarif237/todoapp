
document.getElementById('addTodo').addEventListener('click', function() {
    console.log('Add Task button clicked'); // For debugging
    var todoInput = document.getElementById('todoInput');
    var todoText = todoInput.value;

    if (todoText.trim() === '') {
        alert('Please enter a task.'); // Prevent empty tasks
        return;
    }

    var li = document.createElement('li');
    li.textContent = todoText;

    // Add complete button
    var completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-btn';
    completeButton.onclick = function() {
        li.style.textDecoration = 'line-through'; // Mark as complete
        checkGameStatus(); // Check game status after marking complete
    };

    // Add delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        this.parentElement.remove(); // Remove the task
        updateTaskCount(); // Update task count
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton); // Append the delete button to the list item
    document.getElementById('todoList').appendChild(li); // Append the list item to the todo list

    todoInput.value = ''; // Clear input field
    todoInput.focus(); // Focus back on input field
    updateTaskCount(); // Update task count
});

// Function to update the task count
function updateTaskCount() {
    var taskCount = document.querySelectorAll('#todoList li').length;
    document.getElementById('taskCount').textContent = 'Total Tasks: ' + taskCount;

    // Check for game status
    if (taskCount === 3) {
        alert('You have three tasks! Now, try to complete them!');
    }
}

// Function to check game status
function checkGameStatus() {
    var completedTasks = document.querySelectorAll('#todoList li[style*="line-through"]').length;
    var totalTasks = document.querySelectorAll('#todoList li').length;

    if (completedTasks === totalTasks && totalTasks === 3) {
        alert('Congratulations! You completed all tasks!');
        resetGame(); // Reset game after winning
    } else if (completedTasks === totalTasks && totalTasks < 3) {
        alert('Oops! You completed all tasks but you didn\'t reach three tasks!');
        resetGame(); // Reset game after losing
    }
}

// Optional: Add event listener for Enter key
document.getElementById('todoInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addTodo').click(); // Trigger click event
    }
});

// Function to reset the game
function resetGame() {
    document.getElementById('todoList').innerHTML = ''; // Clear the todo list
    updateTaskCount(); // Update task count
}
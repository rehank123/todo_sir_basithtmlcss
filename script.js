let currentTaskIndex = null;
let taskCount = 0;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    if (taskValue === '') return;

    if (currentTaskIndex !== null) {
        const listItems = document.querySelectorAll('#taskList li');
        listItems[currentTaskIndex].children[1].textContent = taskValue;
        document.getElementById('addButton').textContent = 'Add Task';
        currentTaskIndex = null;
    } else {
        taskCount++;
        const li = document.createElement('li');
        
        const sno = document.createElement('span');
        sno.className = 'sno';
        sno.textContent = taskCount;

        const taskText = document.createElement('span');
        taskText.textContent = taskValue;
        taskText.style.flexGrow = "1";

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.onclick = function() {
            currentTaskIndex = Array.from(document.querySelectorAll('#taskList li')).indexOf(li);
            taskInput.value = taskValue;
            document.getElementById('addButton').textContent = 'Update';
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = function() {
            li.remove();
            taskCount--;
            updateSerialNumbers();
        };

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);
        li.appendChild(sno);
        li.appendChild(taskText);
        li.appendChild(buttonContainer);
        document.getElementById('taskList').appendChild(li);
    }
    taskInput.value = '';
}

function updateSerialNumbers() {
    const listItems = document.querySelectorAll('#taskList li');
    listItems.forEach((item, index) => {
        item.children[0].textContent = index + 1;
    });
}

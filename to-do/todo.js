const pendingTasksList = document.getElementById('pendingTasks');
        const completedTasksList = document.getElementById('completedTasks');
        const newTaskInput = document.getElementById('newTask');

        function addTask() {
            const taskText = newTaskInput.value;
            if (taskText.trim() !== '') {
                const taskItem = document.createElement('li');
                const deleteBtn = document.createElement('button');
                const completeBtn = document.createElement('button');
                const editBtn = document.createElement('button');
                const currentDate = new Date();
                const dateString = currentDate.toLocaleDateString();
                const timeString = currentDate.toLocaleTimeString();

                taskItem.innerHTML = `
                    <span>${taskText}</span>
                    <span>${dateString} ${timeString}</span>
                `;

                deleteBtn.textContent = 'Delete';
                completeBtn.textContent = 'Complete';
                editBtn.textContent = 'Edit';

                deleteBtn.onclick = function () {
                    taskItem.remove();
                };

                completeBtn.onclick = function () {
                    taskItem.classList.toggle('completed');
                    if (taskItem.classList.contains('completed')) {
                        completedTasksList.appendChild(taskItem);
                        completeBtn.textContent = 'Undo';
                    } else {
                        pendingTasksList.appendChild(taskItem);
                        completeBtn.textContent = 'Complete';
                    }
                };

                editBtn.onclick = function () {
                    const newTaskText = prompt('Edit task:', taskText);
                    if (newTaskText !== null) {
                        taskItem.querySelector('span').textContent = newTaskText;
                    }
                };

                taskItem.appendChild(deleteBtn);
                taskItem.appendChild(completeBtn);
                taskItem.appendChild(editBtn);

                pendingTasksList.appendChild(taskItem);

                newTaskInput.value = '';
            }
        }
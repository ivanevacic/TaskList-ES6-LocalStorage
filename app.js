//  Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//  Load all event listeners
function loadEventListeners() {
    //  Listen for submit action on form variable and execute function addTask
    form.addEventListener('submit', addTask);
}

//  Call function that loads all listeners
loadEventListeners();

//  Add Task function
function addTask(e) {
    //  If taskInput is empty
    if(taskInput.value === ''){
        //  Alert user that input is empty
        alert('Can\'t add empty input!');
    }
    //  Create li element
    const li = document.createElement('li');
    //  Add css class to element
    li.className = 'collection-item';
    //  Create text node with input value and append it to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //  Add delete icon (x)
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //  Append link to li
    li.appendChild(link);
    //  Append li to the ul
    taskList.appendChild(li);
    //  Clear input
    taskInput.value = '';
    //  Prevent default behaviour(form submit)
    e.preventDefault();
}

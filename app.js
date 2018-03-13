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
    //  Listen for click on element with .collection class and execute function removeTask
    taskList.addEventListener('click', removeTask);
    //  Listen for click on element with .clear-tasks class and execute function clearTasks
    clearBtn.addEventListener('click', clearTasks);
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

//  Remove Task function
    //  Remove specific task
    function removeTask(e) {
        //  Target delete button(x)
            //  We get 'i' element,but we need ti 'a' element -> the parent of 'i' element
        if(e.target.parentElement.classList.contains('delete-item')) {
            console.log(e.target);
            //  Removes the whole 'li' element(task)
                //  'a' is a parent of i,and li is a parent of 'a'-> we delete 'li' so that's why double parentElement
            e.target.parentElement.parentElement.remove();
        }    
    }

//  ClearTasks  function
    //  Deletes all tasks
    function clearTasks() {
        //  'Basic way'
            //  taskList.innerHTML = '';
        //  'Faster way'
            //  While there is something in the list
                while(taskList.firstChild) {
                    //  Remove 'li' from 'ul'
                    taskList.removeChild(taskList.firstChild);
                } 
    }

//  FilterTasks function
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelector
}


let submitbtn = document.querySelector('#submit');
let getinput = document.querySelector('#todo');
let list = document.querySelector('.your-tasks');
let clearbtn = document.querySelector('.clear-tasks');
let search = document.querySelector('#search');


loadEvents();

function loadEvents() {

    document.addEventListener('DOMContentLoaded', gettasks);

    submitbtn.addEventListener('click', addtodo);
    
    getinput.addEventListener('keypress',function(e){
        if(e.key === 'Enter') {
            addtodo();
        }
    });

    list.addEventListener('click', removeTask);

    clearbtn.addEventListener('click', removeAllTasks);

    search.addEventListener('keydown', tosearch);


}

function gettasks() {
    let tasks;
    if(JSON.parse(localStorage.getItem('tasks')) === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(function(task){
            const li = document.createElement('li');
            li.className = 'list-group-item my-0 bg-light text-dark';
            const toadd = document.createTextNode(`${task}`);
            li.appendChild(toadd);
            const link = document.createElement('a');
            link.className = 'pull-right text-danger delete-item';
            link.href = '#todo-nav';
            link.innerHTML = '<i class="fa fa-times"></i>';
            li.appendChild(link);
            console.log(li);
            document.querySelector('ul.your-tasks').appendChild(li);
        });
    }
}

function addtodo(e) {
    if(getinput.value === ''){
        alert('Task Description is Empty..!');
    } else {
        const li = document.createElement('li');
        li.className = 'list-group-item my-0 bg-light text-dark';
        const toadd = document.createTextNode(`${getinput.value} `);
        li.appendChild(toadd);
        const link = document.createElement('a');
        link.className = 'pull-right text-danger delete-item';
        link.href = '#todo-nav';
        link.innerHTML = '<i class="fa fa-times"></i>';
        li.appendChild(link);
        console.log(li);
        document.querySelector('ul.your-tasks').appendChild(li);
        storeTaskInStorage(getinput.value);
        getinput.value = '';
    }
}

function storeTaskInStorage(task) {
    let tasks = [];
    if(JSON.parse(localStorage.getItem('tasks')) === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("You Want To Remove Selected Task?")){
            let element = e.target.parentElement.parentElement;
            element.remove();
            let tasks;
            if(JSON.parse(localStorage.getItem('tasks')) === null) {
                tasks = [];
            } else {
                tasks = JSON.parse(localStorage.getItem('tasks'));
            }       
            tasks.forEach(function(task, i){
                if(element.textContent === task) {
                    tasks.splice(i, 1);
                }
            });

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

}

function removeAllTasks(e) {

    if(confirm("You Want To Remove All Tasks?")){
        while(list.firstChild){
            list.removeChild(list.firstChild);
            let tasks;
            if(JSON.parse(localStorage.getItem('tasks')) === null) {
                tasks = [];
            } else {
                tasks = JSON.parse(localStorage.getItem('tasks'));
            }
            tasks = null;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
}

function tosearch(e) {

    let innertext = e.target.value.toLowerCase();

    document.querySelectorAll('.list-group-item').forEach(
        function(todo) {
            let item = todo.firstChild.textContent;
            if(item.toLowerCase().indexOf(innertext) != -1){
                todo.style.display = 'block';
            } else {
                todo.style.display = 'none';
            }
        }
    );

}
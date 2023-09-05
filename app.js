let nameTodo = document.querySelector('.name'),
    contentTodo = document.querySelector('.content'),
    addButton = document.querySelector('.push_task');
    todo = document.querySelector('.tasks');
    clearButton = document.querySelector('.btn_clear');
    deleteFirstButton = document.querySelector('.btn_delete_first');
    deleteLastButton = document.querySelector('.btn_delete_last');
    
let todoList = []; 

if(localStorage.getItem('todoList')){
    todoList = JSON.parse(localStorage.getItem('todoList'));
    displayMessages();
}

addButton.addEventListener('click', function(){
    let newTodo = {
        nameTask: nameTodo.value,
        contentTask: contentTodo.value, 
        completed: false
    };

    todoList.push(newTodo);
    updateTasks();
    displayMessages();
    localStorage.setItem('todoList', JSON.stringify(todoList));
    nameTodo.value = '';
    contentTodo.value = '';
 });

 function displayMessages(){
    let displayMessage = '';
    if(todoList.length === 0){
        todo.innerHTML = '';
    }
    todoList.forEach(function(item, i){
    displayMessage += `
    <div class="task" id='${i}'>
        <div class="left_task">
            <div class="content_task">
                <h4 id='${i}'>${item.nameTask}</h4>
                <p class="contentTodo">${item.contentTask}</p>
             </div>
        </div>
        <div class="center_task">
            <button type="button" class="btn_delete" id='${i}' onclick="deleteTodo(${i})">Удолить</button>
        </div>
        <div class="right_task">
            <button type="button" class="btn_complete_${item.completed ? 'checked' : ''}" id='${i}' onclick="completeTodo('${item.nameTask}')"></button>
        </div>
    </div>
    `;
    todo.innerHTML = displayMessage;
    })
}

clearButton.addEventListener('click', function(){
    nameTodo.value = '';
    contentTodo.value = '';
});

deleteFirstButton.addEventListener('click', function(){
    todoList.splice(0, 1);
    displayMessages();  
    updateTasks();
    localStorage.setItem('todoList', JSON.stringify(todoList));
    
});

deleteLastButton.addEventListener('click', function(){
    let ids = todoList.length - 1;
    todoList.splice(ids, 1);
    displayMessages();  
    updateTasks();
    localStorage.setItem('todoList', JSON.stringify(todoList));
    
});

function updateTasks(){
    todoList.sort((x, y) =>  x.completed - y.completed);
    console.log(todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayMessages(); 
}

function deleteTodo(id){
    todoList.splice(id, 1);
    displayMessages();  
    updateTasks();
    localStorage.setItem('todoList', JSON.stringify(todoList));
};

function completeTodo(i){
    todoList.forEach(function(item){
        if (item.nameTask === i){
            item.completed = !item.completed;
            localStorage.setItem('todoList', JSON.stringify(todoList));
            displayMessages();    
        }   
    }) 
    updateTasks()
};










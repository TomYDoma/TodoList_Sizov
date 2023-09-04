let nameTodo = document.querySelector('.name'),
    contentTodo = document.querySelector('.content'),
    addButton = document.querySelector('.message');
    todo = document.querySelector('.tasks');
    del = document.querySelector('.btn_delete');
    
let todoList = []; 

if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}
    

addButton.addEventListener('click', function(){
    let newTodo = {
        nameTask: nameTodo.value,
        contentTask: contentTodo.value, 
    };


    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
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
            <button type="button" class="btn_complete" id='${i}'>Выполнить</button>
        </div>
    </div>
    `;
    todo.innerHTML = displayMessage;

    })

}

todo.addEventListener('change', function(event){
    console.log(event.target);
});


function deleteTodo(id){
    todoList.splice(id, 1);
    displayMessages();  
    localStorage.setItem('todo', JSON.stringify(todoList));
    console.log(document.querySelector('.btn_delete').id);
};




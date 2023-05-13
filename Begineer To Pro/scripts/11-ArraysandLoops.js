let todoList1 = [];
let todoList2 = [];
let todoList3 = [{
    name: 'wash dishes',
    dueDate: '2023-10-01'
},{
    name: 'how are you',
    dueDate: '2023-11-02'
}
];




function addTodoList() {
    const inputElement = document.querySelector('.input-data') 
    let newTodo = inputElement.value
    todoList1.push(newTodo)
    inputElement.value = ''
    console.log(todoList1)
} 

function addTodoList2() {
    const inputElement = document.querySelector('.input-data2')
    let newTodo = inputElement.value
    todoList2.push(newTodo);
    inputElement.value =  ''
    console.log(todoList2)
    renderTodoList2();
}

function renderTodoList2(){
    let displayFormat = '';
    for(let i=0;i<todoList2.length;i++){
        displayFormat += `
        <p>
            ${todoList2[i]} 
            <button onclick="
                todoList2.splice(${i},1);
                renderTodoList2();
            " class="delete-button">Delete</button>
        </p>
        `
    }
    console.log(displayFormat)
    document.querySelector('.display-list2').innerHTML = displayFormat;
}

renderTodoList3();

function addTodoList3() {
    console.log(`Starting add ${todoList3.length} `)
    const inputTodoName = document.querySelector('.input-data3')
    const inputTodoDate = document.querySelector('.input-date3')
    let name = inputTodoName.value
    let dueDate = inputTodoDate.value
    todoList3.push({
        name: name,
        dueDate: dueDate
    });
    inputTodoName.value =  ''
    console.log(`Ending Add${todoList3[0].name} ${todoList3[0].dueDate} `)
    console.log(todoList3.length)
    renderTodoList3();
}

function renderTodoList3(){
    let displayFormat = '';
    for(let i=0;i<todoList3.length;i++){
        displayFormat += `
        <div>${todoList3[i].name}</div>
        <div>${todoList3[i].dueDate}</div>
        <button onclick="
            todoList3.splice(${i},1);
            renderTodoList3();
        " class="delete-button">Delete</button>
        `
    }
    document.querySelector('.display-list3').innerHTML = displayFormat;
}
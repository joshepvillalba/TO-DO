import { TodoList } from '../classes/';
import { Todo } from '../classes/';
import { crearTodoHtml } from '../js/componentes';

const txtInput = document.querySelector('.new-todo');

export const todoList = new TodoList();

// import { todo } from '../classes/';
// import { todoList } from '../index/'
//eventos

todoList.todos.forEach( crearTodoHtml );

txtInput.addEventListener('keyup', (event) => {

    if( event.keyCode === 13 && txtInput.value != '' ){
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }

})
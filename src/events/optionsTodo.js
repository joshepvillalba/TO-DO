// import { TodoList } from "../classes";
import { todoList } from './addTodoList';

const divTodoList   = document. querySelector('.todo-list');
const btnBorrar     = document. querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro'); 

divTodoList.addEventListener('click', (event) => {

    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if( nombreElemento.includes('input') ){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }

    if( nombreElemento.includes('button') ){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild( todoElemento );
    }

});

btnBorrar.addEventListener('click', (event) => {

    todoList.eliminarCompletados();

    for( let i = divTodoList.children.length-1; i >= 0; i--){

        const elemento = divTodoList.children[i];
        
        if( elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }

    }


});

ulFiltros.addEventListener('click', (event) => {

    anchorFiltros.forEach( data =>  data.classList.remove('selected'));
    event.target.classList.add('selected')

    const filtro = event.target.text;
    if (!filtro) return;
    
    for (const elemento of divTodoList.children){

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ){

            case 'Pendientes':
                if( completado ){
                    elemento.classList.add('hidden');
                }
                break;

            case 'Completados':
                if( !completado ){
                    elemento.classList.add('hidden');
                }
            break;

        }

    }

});
import { Todo } from "./todo.class";


export class TodoList {

    constructor(){
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStore();
    }

    eliminarTodo( id ){

        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStore();

    }

    marcarCompletado( id ){
        this.todos.map( (data) => {
            if(data.id == id){
                data.completado = !data.completado;
            }            
        })

        this.guardarLocalStore();

    }

    eliminarCompletados(){
        
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStore();
    }

    guardarLocalStore(){

        localStorage.setItem('todos', JSON.stringify(this.todos));

    }

    cargarLocalStorage(){

        this.todos = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')) : [];

        this.todos = this.todos.map( Todo.fromJson );
  
    }

}
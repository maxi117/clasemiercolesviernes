import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { TodoItem } from "./TodoItem";

export function TodoList(){

    //Inicializar las variables que estará viendo react, por si sufren cambios
    //todos = nombre de la constante
    //setTodos = metodo para ver si sufre modificaciones
    //useState = Usara un useState para capturar estados
    // en este caso es un arreglo

    const [todos, setTodos] = useState([
        {id:1, tarea:'Tarea 1'},
        {id:2, tarea:'Tarea 2'},
        {id:3, tarea:'Tarea 3'},
        {id:4, tarea:'Tarea 4'},
        {id:5, tarea:'Tarea 5'},

    ]);
    return (
        <Fragment>
            <h1>Lista de tareas</h1>

<div className="input-group mt-4 mb-4">
    <input placeholder="Ingrese una tarea" className="form-control" type="text" />
    <button className="btn btn-success">+</button>
</div>

            <ul className="list-group">
                {todos.map((todo) =>(
                    <TodoItem todo={todo}></TodoItem>
                ))}
            </ul>  
        </Fragment>
    );
}
import React, { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { TodoItem } from "./TodoItem";
import { v4 as uuid } from "uuid";

export function TodoList() {

    //Inicializar las variables que estará viendo react, por si sufren cambios
    //todos = nombre de la constante
    //setTodos = metodo para ver si sufre modificaciones
    //useState = Usara un useState para capturar estados
    // en este caso es un arreglo

    const [todos, setTodos] = useState([
        { id: 1, tarea: 'Tarea 1' },
        { id: 2, tarea: 'Tarea 2' },
        { id: 3, tarea: 'Tarea 3' },
        { id: 4, tarea: 'Tarea 4' },
        { id: 5, tarea: 'Tarea 5' },

    ]);
    const mitareaRef = useRef();

    const agregarTarea = () => {
        // alert("Agregando tarea...");
        const tareaInput = mitareaRef.current.value;
        const id = uuid();
        //alert(id);

        if (tareaInput === '') {
            return;
        }
        setTodos((prevTodos) => {
            const nuevaTarea = {
                id: uuid(),
                tarea: tareaInput
            }

            // 3 puntos toma el arreglo nuevo y lo descompone, con este return estoy tomando el arreglo antiguo y sumando la tarea nueva
            // Logrando formar un arreglo nuevo
            mitareaRef.current.value = '';
            return [...prevTodos, nuevaTarea]
        });


    }

    return (
        <Fragment>
            <h1>Lista de tareas</h1>

            <div className="input-group mt-4 mb-4">
                <input ref={mitareaRef} placeholder="Ingrese una tarea" className="form-control" type="text" />
                <button onClick={agregarTarea} className="btn btn-success">+</button>
            </div>

            <ul className="list-group">
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id}></TodoItem>
                ))}
            </ul>
        </Fragment>
    );
}
import React, { useState } from "react";

export function Item() {
	const [tasks, setTasks] = useState({ lista: [], texto: "Hola" });
	let myTodo = { lista: tasks.lista, texto: tasks.texto };

	const formInput = e => {
		e.preventDefault();
		myTodo.lista.push(myTodo.texto);
		setTasks(myTodo);
	};

	const createItem = e => {
		myTodo.texto = e.target.value;
		setTasks(myTodo);
	};

	const removeTask = item => {
		myTodo.lista = myTodo.lista.filter(task => task != item);
		setTasks(myTodo);
	};

	var tasksToRender = myTodo.lista.map(task => {
		return (
			<li key={Math.random() * 60}>
				<div className="item">
					<label>{task}</label>
					<button className="remove" onClick={() => removeTask(task)}>
						x
					</button>
				</div>
			</li>
		);
	});

	return (
		<>
			<div>
				<form onSubmit={formInput}>
					<input
						type="text"
						value={tasks.texto}
						onChange={createItem}
					/>
				</form>
			</div>
			<div>
				<ul className="todo-list">{tasksToRender}</ul>
			</div>
			<div>
				<span className="todo-count">
					<strong>{tasks.lista.length}</strong> item left
				</span>
			</div>
		</>
	);
}

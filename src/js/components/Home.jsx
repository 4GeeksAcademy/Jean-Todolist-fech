import React, { useState } from "react";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [Todo, setTodo] = useState([])
	
	return (

		<div className="container mt-5">
			<h1>Todo List</h1>
			<ul>
				<li>
					<input
				 type="text"
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
                   setTodo(Todo.concat(inputValue));
				   setInputValue("");
					}
				}}
				placeholder="What do you need to do?"></input></li>
				{Todo.map((item, index) => (
                  <li>
                 {item} {""} <span className="" onClick={() => setTodo(Todo.filter((t, currentIndex) => index != currentIndex))}>X</span>
				  </li>
				))}
			</ul>
			<div>{Todo.length} Item left</div>
		</div>
	);
};

export default Home;
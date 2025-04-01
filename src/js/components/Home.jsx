import React, { useState, useEffect } from "react";


//create your first component
const Home = () => {
    const [InputValue, setInputValue] = useState("")
    const [ToDo, setToDo] = useState([])

    useEffect(()=> {

        getUser()
    },[])
	
    // useEffect(() => {}, [ToDo])
    const addToList = async (e) => {
        e.preventDefault();
        let ToDo = {label: InputValue, is_done: false}
        let response = await fetch('https://playground.4geeks.com/todo/todos/jeankender', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(ToDo)
        })
        let data = await response.json()
        getUser()
        setInputValue("")
    };
    const removeToDo = async (X) =>{
        let deleteResponse = await fetch(`https://playground.4geeks.com/todo/todos/${X}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
        getUser()
    };


    const getUser = async() => {
        let response = await fetch('https://playground.4geeks.com/todo/users/jeankender')
        let data = await response.json()
        console.log(data)
        if(typeof data.name !='undefined') {
            setToDo(data.todos)
            console.log(data.name)
        }
        else {
            let response = await fetch('https://playground.4geeks.com/todo/users/jeankender',{
                method: "POST",
                headers: { "Content-type": "application/json" },
            })
            let data = await response.json()
            // console.log(data)
        }
    }






return (

	<div className="container mt-5">
		<h1>Todo List</h1>
		<ul>
			<li>
				<input
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={InputValue}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							addToList(e)
						}
					}}
					placeholder="What do you need to do?"></input></li>
			{ToDo.map((item, index) => (
				<li key ={item.id}>
					{item.label} {""} <span className="" onClick={() => {removeToDo(item.id)}}>X</span>
				</li>
			))}
		</ul>
		<div>{ToDo.length} Item left</div>
	</div>
);
};

export default Home;
import React, { Component } from "react";
import Header from "./Header";
import Input from "./Input";
import ToDoItem from "./ToDoItem";
import FilterButton from "./FilterButton";

const FILTER_MAP ={
    Items: () => true,
    Active: item =>!item.completed,
    Completed: item => item.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: "1", name: "Attend family meeting", completed: true},
                {id: "2", name: "Pick up clothes from dry cleaner", completed: false},
                {id: "3", name: "Plan date night", completed: false},
                {id: "4", name: "Brainstorm for design", completed: false},
                {id: "5", name: "Order groceries", completed: false}
            ],
            toDo: "",
            toDoState: "Items"
        };
    }

	handleToDoChange = (event) => {
		this.setState({toDo: event.target.value });
	};
  
	addItem = (event) => {
		event.preventDefault();
		
		this.setState(({items, toDo}) => 
			({
				items: [...items, { id: items.length + 1, name: toDo, completed: false}],
				toDo: ""
			})
		);
	};

    onChangeBox = (id) => {
        this.setState(prevState => {
            return {
                items: prevState.items.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                    return item;
                }),
            }
        });  
    };

    setFilter = (name) => {
        this.setState(
            {toDoState: name},
        );
    }

    clearCompleted = () => {
        this.setState({
                items: this.state.items.filter(item => item.completed === false)
            }
        )
    };

    // const  todoItems = this.state.items.filter((item) => FILTER_MAP[this.state.toDoState](item)).map(item => (

    render() {
       const  todoItems = this.state.items.filter(FILTER_MAP[this.state.toDoState]).map(item => (
            <ToDoItem 
                id={item.id} 
                name={item.name} 
                completed={item.completed}
                key={item.id}
                handleChange={this.onChangeBox}
                inputType="checkbox"
                clearCompleted={this.clearCompleted}
            />
        ));

        const filterlist = FILTER_NAMES.map(name => (
            <FilterButton
                key={name}
                name={name}
                setFilter={this.setFilter}
            />
        ))
        
        const completedTodos = this.state.items.filter(todoItems => todoItems.completed === false)
        const todosNoun = completedTodos.length >= 2 ? 'items' : 'item';
        const todoListLength = `${completedTodos.length} ${todosNoun} left`;

        return (
            <div className="containers">
                <Header/>
                <div className="list-items">
                    <Input
                        name="toDo"                        
                        handleChange={this.handleToDoChange}
                        value={this.state.toDo}
                        addItem={this.addItem}
                        
                    />
                </div>
                
                <div className="list">
                    <div className="list-entries">
                        <ul className="the-list">
                            {todoItems}
                        </ul>
                    </div>
                    
                    <div className="footer">
                        <div id="list-heading">{todoListLength}</div>
                        <div id="footer-button" className="selected">
                            <li id="all-items"><span className="all">All</span>{filterlist[0]}</li>
                            <li id="active">{filterlist[1]}</li>
                            <li id="completed">{filterlist[2]}</li>
                        </div>
                        <div id="footer-completed" onClick={this.clearCompleted}>XClear Completed</div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default ToDo;


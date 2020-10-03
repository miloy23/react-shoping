import React,{Component} from 'react';

class Counter extends Component{
	
	
	
	render(){
	const { value, id, doIncrease, counter, doDecrease, doDelete }=this.props;
	return (
	
	<div className="container">
	
	
	<div><h1>Item No {id}</h1></div>
	<div className={value===0 ? "badge badge-warning" : "badge badge-primary"}>
	{value ===0 ? "zero": value}
	</div>
	
	
	
	<button 
	onClick={() => doIncrease(counter)} 
	className="btn btn-primary m-2"
	>increse</button>
	
	<button 
	className="btn btn-warning m-2"
	onClick={() => doDecrease(counter)} 
	disabled={value ===0}
	>Decrese</button>
	
	<button 
	className="btn btn-danger"
	onClick={() => doDelete(id)} 
	>Delete</button>
	
	
	</div>);
	}
}
export default Counter;

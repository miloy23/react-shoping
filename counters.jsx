import React,{Component} from 'react';
import Counter from "./counter";
import Navv from "./navv";

class Counters extends Component{
	state={

	
	cnts: [
		{id:1,value:0},
		{id:2,value:0},
		{id:3,value:0},
		{id:4,value:0},
		]
	};
	
	
	
	doIncrease=(arr)=>{
		const cnts=[...this.state.cnts];
		const index=cnts.indexOf(arr);
		cnts [index]={...arr};
		cnts[index].value++;
		this.setState({cnts});
		
	};
	
	doDecrease=(arr)=>{
		const cnts=[...this.state.cnts];
		const index=cnts.indexOf(arr);
		cnts [index]={...arr};
		cnts[index].value--;
		this.setState({cnts});
	};
	
	doDelete=(arrId)=>{
		const cnts=this.state.cnts.filter(c=>c.id !==arrId);
		this.setState({cnts});
	};
	
	onCount(){
	
		const cnts=this.state.cnts.filter(c=> c.value !==0);
		return cnts.length;
	
	};

	
	
	
	
	
	
	render(){
	
	
	
	return (
	
	
    <div>
	<div>
	<nav class="navbar navbar-expand-lg navbar-light bg-primary">
	<a class="navbar-brand " >Total differnt Item </a>
	  <a class="navbar-brand bg-light badge" > {this.onCount()}</a>
	</nav>
	</div>
	
	<div className="container"> 
	{this.state.cnts.map(counter => 
	<Counter
	id={counter.id}
	value={counter.value}
	counter={counter}
	doDecrease={this.doDecrease}
	doIncrease={this.doIncrease}
	doDelete={this.doDelete}
	/>)}
	</div>
	
	</div>
	
	);
	
	};
}
export default Counters;

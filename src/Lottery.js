import React, { Component } from 'react'
import Ball from './Ball'

class Lottery extends Component{
    static defaultProps={
        title:'Lotto',
        maxBalls:6,
        maxNum:48
    }
    constructor(props){
        super(props);
        this.state={nums: Array.from({length:this.props.maxBalls})}
        this.handelClick=this.handelClick.bind(this)
    }
    generate(){
        this.setState(currState=>{
            nums:currState.nums.map(
                n=>Math.floor(Math.random()*this.props.maxNum)+1)
        })
        
    }
    handelClick(){
        this.generate();
    }
    render(){
        return(
            <section>
                <h1>{this.props.title}</h1>
                <div>{this.state.nums.map(n=><Ball num={n}/>)}</div>
                <button onClick={this.handelClick}>Generate</button>
            </section>
        )
    }

}

export default Lottery;